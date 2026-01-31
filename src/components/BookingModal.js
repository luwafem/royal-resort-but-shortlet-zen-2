import React, { useState } from 'react';
import { FiX, FiCalendar, FiUsers, FiClock } from 'react-icons/fi';

const BookingModal = ({ property, isOpen, onClose }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);

  const total = property.price * 1.15;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white max-w-xl w-full rounded-3xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="px-10 pt-10 pb-6 border-b border-zinc-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
                Reservation
              </p>
              <h2 className="font-playfair text-3xl">
                {property.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-900"
            >
              <FiX size={22} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-10 py-8 space-y-10">

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h3 className="text-lg mb-6">Select your dates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-zinc-500 mb-2 block">
                    Check in
                  </label>
                  <div className="relative">
                    <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-zinc-200 rounded-xl focus:outline-none focus:border-zinc-900"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-zinc-500 mb-2 block">
                    Check out
                  </label>
                  <div className="relative">
                    <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-zinc-200 rounded-xl focus:outline-none focus:border-zinc-900"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h3 className="text-lg mb-6">Guests</h3>
              <div>
                <label className="text-sm text-zinc-500 mb-2 block">
                  Number of guests
                </label>
                <div className="relative max-w-xs">
                  <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-4 border border-zinc-200 rounded-xl focus:outline-none focus:border-zinc-900"
                  >
                    {[...Array(property.maxGuests)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} guest{i > 0 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <h3 className="text-lg mb-6">Summary</h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Nightly rate</span>
                  <span>{formatPrice(property.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Service & taxes</span>
                  <span>{formatPrice(property.price * 0.15)}</span>
                </div>

                <div className="border-t border-zinc-200 pt-4 flex justify-between text-base font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <p className="mt-6 text-xs text-zinc-500 flex items-center gap-2">
                <FiClock />
                Free cancellation up to 48 hours before arrival
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-10 py-6 border-t border-zinc-100 flex justify-between items-center">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="text-sm text-zinc-500 hover:text-zinc-900"
            >
              Back
            </button>
          ) : <span />}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-8 py-3 rounded-full bg-zinc-900 text-white text-sm hover:bg-black transition"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-zinc-900 text-white text-sm hover:bg-black transition"
            >
              Confirm reservation
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
