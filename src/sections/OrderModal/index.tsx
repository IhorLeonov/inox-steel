import { Dialog, DialogPanel, Transition } from '@headlessui/react';
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
      <Dialog
        as="div"
        className="fixed inset-0 z-[100] bg-[#0000008C]"
        onClose={() => setIsModalOpen(false)}
      >
        <DialogPanel
          className={twMerge(
            'relative left-1/2 top-1/2 w-[calc(100%_-_32px)] max-w-[727px] -translate-x-1/2 -translate-y-1/2 bg-gray md:w-[calc(100%_-_64px)]',
            'rounded-2xl p-5',
          )}
        >
          <Heading className="text-center" tag="h2">
            оберіть зручний спосіб
          </Heading>
          <p className="text-center">зв’яжіться з нами самостійно</p>

          <Button className="w-full" icon="arrow">
            Зателефонувати
          </Button>

          <p className="text-center">
            або заповніть форму та ми зв’яжемось з вами
          </p>

          <p>Ім’я</p>
          <p>Ім’я</p>
          <p>Ім’я</p>

          <Button className="w-full" icon="arrow">
            Надіслати
          </Button>

          <IconButton
            iconClass="h-[28px]"
            className="absolute right-2 top-2"
            icon="close"
            onClick={() => setIsModalOpen(false)}
          />
        </DialogPanel>
      </Dialog>
    </Transition>
  );
}
