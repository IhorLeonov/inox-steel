import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
  DialogBackdrop,
} from '@headlessui/react';
import {
  ComponentPropsWithoutRef,
  Dispatch,
  Fragment,
  SetStateAction,
} from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/components/Button';
import Heading from '@/components/Heading';
import IconButton from '@/components/IconButton';
import OrderForm from '@/components/OrderForm';

type OrderModalProps = ComponentPropsWithoutRef<'div'> & {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function OrderModal({
  isModalOpen,
  setIsModalOpen,
}: OrderModalProps) {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" onClose={() => setIsModalOpen(false)}>
        <TransitionChild
          as={Fragment}
          enter="transition-opacity duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 z-[1000] bg-[#0000008C]">
            <DialogPanel
              className={twMerge(
                'relative left-1/2 top-1/2 w-[calc(100%_-_32px)] max-w-[727px] -translate-x-1/2 -translate-y-1/2 bg-gray md:w-[calc(100%_-_64px)]',
                'rounded-xl p-6',
              )}
            >
              <Heading className="text-center" tag="h2">
                оберіть зручний спосіб
              </Heading>

              <p className="mt-7 text-center text-[18px] font-medium uppercase">
                зв’яжіться з нами самостійно
              </p>

              <Button className="mt-5 w-full" icon="arrow">
                Зателефонувати
              </Button>

              <p className="mt-7 text-center text-[18px] font-medium uppercase">
                або заповніть форму та ми зв’яжемось з вами
              </p>

              <OrderForm
                className="mt-4 md:mt-5 xl:mt-[40px]"
                buttonSubmitClass="mt-4 md:mt-5 xl:mt-[40px]"
              />

              <IconButton
                iconClass="h-[28px]"
                className="absolute right-2 top-2"
                icon="close"
                onClick={() => setIsModalOpen(false)}
              />
            </DialogPanel>
          </DialogBackdrop>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
