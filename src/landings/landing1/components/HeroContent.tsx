import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Phone, Mail, CheckCircle } from 'lucide-react';

interface FbQueueItem {
  (...args: unknown[]): void;
  callMethod?: string;
  queue: unknown[];
  push: (...args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
}

declare global {
  interface Window {
    fbq?: FbQueueItem;
    _fbq?: FbQueueItem;
  }
}

const fbPixelId = 'YOUR_PIXEL_ID_HERE';

const initFacebookPixel = () => {
  if (typeof window === 'undefined' || window.fbq) return;

  ((
    f: Window & typeof globalThis,
    b: Document,
    e: string,
    v: string,
    n?: FbQueueItem,
    t?: HTMLScriptElement,
    s?: Element
  ) => {
    if (f.fbq) return;

    const fbqFunc = function (...args: unknown[]) {
      if (fbqFunc.callMethod) {
        const methodName = fbqFunc.callMethod;
        const method = (
          fbqFunc as unknown as Record<string, (...args: unknown[]) => void>
        )[methodName];
        if (method) {
          method.apply(fbqFunc, args);
        }
      } else {
        fbqFunc.queue.push(args);
      }
    } as FbQueueItem;

    fbqFunc.queue = [];
    fbqFunc.push = (...args) => fbqFunc(...args);
    fbqFunc.loaded = true;
    fbqFunc.version = '2.0';

    f.fbq = fbqFunc;
    if (!f._fbq) f._fbq = fbqFunc;

    const script = b.createElement(e) as HTMLScriptElement;
    script.async = true;
    script.src = v;
    const firstScript = b.getElementsByTagName(e)[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );

  if (window.fbq) {
    (window.fbq as FbQueueItem)('init', fbPixelId);
    (window.fbq as FbQueueItem)('track', 'PageView');
  }
};

const HeroContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    initFacebookPixel();
  }, []);

  const validatePhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const regex = /^\d{10,15}$/;
    return regex.test(cleaned);
  };

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleBecomeAuthorClick = () => {
    if (window.fbq) {
      (window.fbq as FbQueueItem)('track', 'Lead');
    }
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    if (!validatePhone(phone)) {
      setPhoneError('Enter a valid phone number (e.g., +380 555 444 3322)');
      valid = false;
    } else {
      setPhoneError('');
    }

    if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!valid) return;

    setIsSubmitting(true);

    console.log('Form submitted:', { phone, email });

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setPhone('');
      setEmail('');
    }, 3000);
  };

  return (
    <>
      <div className="flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center max-w-[700px] w-full space-y-6">
          <p className="text-sm text-white leading-relaxed p-2">
            StorybyWriter is a powerful all-in-one publishing platform for
            writers to create, share, and earn from their stories, whether they
            be novels, scripts, or more. With more than 28 000 authors,
            StorybyWriter helps authors get initial audience, feedback, and
            suggestions from readers all over the world.
          </p>

          <motion.button
            onClick={handleBecomeAuthorClick}
            className="backdrop-blur-xl border border-white/30 bg-white/20 
                       text-white font-bold rounded-2xl px-8 py-3 
                       shadow-md cursor-pointer"
            whileHover={{
              scale: 1.08,
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 25px rgba(255, 255, 255, 0.15)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 17,
            }}
          >
            BECOME AN AUTHOR
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-black border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white font-serif">
                Become an Author
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-sm text-white/70 mb-6">
              Please leave your details so we can contact you.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8"
              >
                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                <p className="text-lg font-medium text-white mb-2">
                  Your data has been sent.
                </p>
                <p className="text-sm text-white/70">
                  We will contact you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+380 XX XXX XXXX"
                      className="w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-lg 
                                 text-white placeholder-white/40 focus:outline-none focus:border-white/50 
                                 transition"
                    />
                  </div>
                  {phoneError && (
                    <p className="mt-1 text-xs text-red-400">{phoneError}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="author@example.com"
                      className="w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-lg 
                                 text-white placeholder-white/40 focus:outline-none focus:border-white/50 
                                 transition"
                    />
                  </div>
                  {emailError && (
                    <p className="mt-1 text-xs text-red-400">{emailError}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold rounded-xl py-3 
                             hover:bg-white/90 transition disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default HeroContent;
