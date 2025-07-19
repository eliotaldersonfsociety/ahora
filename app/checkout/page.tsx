'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { useCart } from '@/hooks/useCart';
import { DeliveryInfoForm } from '@/components/delivery-info-form';
import { PaymentMethod } from './PaymentMethod';
import { OrderSummary } from './OrderSummary';
import { ShippingMethod } from './ShippingMethod';
import CheckoutSkeleton from './CheckoutSkeleton';
import { Product, DeliveryInfo, CartItem } from '@/types/productos';
import { saveOrderAction } from '@/app/helpers/saveOrderToDB';

export default function Checkout() {
  const router = useRouter();
  const { cart, clearCart } = useCart();

  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [shippingMethod, setShippingMethod] = useState('');
  const [selectedService, setSelectedService] = useState<{ name: string; balance: number } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    name: '',
    address: '',
    phone: '',
    city: '',
    department: '',
    email: '',
  });

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const shippingServices = cart.items[0]?.shipping_services || [];
    const service = shippingServices.find((s) => s.name === shippingMethod);
    if (service) setSelectedService(service);
    console.log('Selected service:', service);
  }, [shippingMethod, cart.items]);

  useEffect(() => {
    if (!isLoading && cart.items.length === 0) {
      toast.info('Tu carrito está vacío');
      router.push('/');
    }
  }, [cart.items.length, router, isLoading]);

  const validateDeliveryInfo = () => {
    console.log('Validating delivery info:', deliveryInfo);
    const errors: string[] = [];

    const phoneCleaned = deliveryInfo.phone.replace(/\D/g, '');

    if (!deliveryInfo.name.trim()) errors.push('Nombre completo es requerido');
    if (!deliveryInfo.address.trim()) errors.push('Dirección es requerida');

    if (!phoneCleaned || phoneCleaned.length < 10 || phoneCleaned.length > 13) {
      errors.push('Teléfono no válido (mínimo 10 dígitos)');
    }

    if (!deliveryInfo.city.trim()) errors.push('Ciudad es requerida');
    if (!deliveryInfo.department.trim()) errors.push('Departamento es requerido');

    if (!deliveryInfo.email.trim()) {
      errors.push('Correo electrónico es requerido');
    } else if (!/^\S+@\S+\.\S+$/.test(deliveryInfo.email)) {
      errors.push('Correo electrónico no es válido');
    }

    return errors;
  };

  const isDeliveryInfoValid = () => {
    const errors = validateDeliveryInfo();
    return errors.length === 0;
  };

  const handleDeliveryInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDeliveryInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) return;

    const validationErrors = validateDeliveryInfo();
    if (validationErrors.length > 0) {
      validationErrors.forEach((err) => toast.error(err));
      return;
    }

    try {
      setIsProcessing(true);

      const cleanCartItems: CartItem[] = cart.items.map((item) => ({
        id: item.id.toString(),
        name: item.name,
        price: parseFloat(item.price.toString()),
        image: typeof item.image === 'string' ? item.image : '',
        quantity: parseInt(item.quantity.toString(), 10),
        color: item.color || '',
        size: item.size || '',
        sizeRange: item.sizeRange?.toString() || '',
      }));

      const total = cart.total;

      console.log('🛒 Productos del carrito:', cleanCartItems);
      console.log('📦 Método de envío:', shippingMethod);
      console.log('🚛 Servicio seleccionado:', selectedService);
      console.log('📨 Información de entrega:', deliveryInfo);
      console.log('💳 Método de pago:', paymentMethod);
      console.log('💰 Total:', total);

      const { orderId } = await saveOrderAction({
        items: cleanCartItems,
        deliveryInfo,
        paymentMethod,
        shippingMethod,
        selectedService,
        total,
        status: 'pendiente',
      });

      console.log('✅ Pedido creado con éxito. ID:', orderId);

      router.push(`/gracias?pedido=${orderId}`);
    } catch (error) {
      console.error('❌ Error en checkout:', error);
      toast.error('Hubo un error procesando tu pedido. Por favor intenta nuevamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return <CheckoutSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <DeliveryInfoForm
              deliveryInfo={deliveryInfo}
              handleDeliveryInfoChange={handleDeliveryInfoChange}
              isProcessing={isProcessing}
            />

            <ShippingMethod
              shippingMethod={shippingMethod}
              setShippingMethod={setShippingMethod}
              isProcessing={isProcessing}
              services={cart.items[0]?.shipping_services || []}
            />

            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              isProcessing={isProcessing}
            />

            <button
              type="submit"
              className="w-full bg-red-800 text-white py-3 px-4 rounded hover:bg-red-900 disabled:bg-red-300 cursor-pointer disabled:cursor-not-allowed"
              disabled={
                isProcessing ||
                !isDeliveryInfoValid() ||
                !paymentMethod.trim() ||
                !shippingMethod.trim()
              }
            >
              {isProcessing ? 'Procesando...' : 'Realizar Pedido'}
            </button>
          </form>
        </div>

        {!isLoading && (
          <OrderSummary
            cartItems={cart.items}
            totalPrice={cart.total}
            shippingService={selectedService}
          />
        )}
      </div>
    </div>
  );
}
