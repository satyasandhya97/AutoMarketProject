import React, { useState, useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function EnquiryModal({ listing, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (listing) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        pincode: '',
        message: `Hi, I am interested in your listing: "${listing.title}". Please contact me with more information.`
      });
      setSubmitted(false);
    }
  }, [listing, isOpen]);

  if (!isOpen || !listing) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in Name, Email, and Phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-[#01295f]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-gray-200 overflow-hidden relative animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="bg-primary-dark text-white p-5 flex justify-between items-center relative">
          <h3 className="text-white text-base md:text-lg font-bold font-display">{listing.title}</h3>
          <button className="text-white/80 hover:text-white cursor-pointer bg-transparent border-none outline-none" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="p-6 max-h-[calc(90vh-80px)] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 px-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
                <ShieldCheck size={36} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-800 mb-3">Enquiry Sent!</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-2">
                Thank you, <strong>{formData.name}</strong>. Your message regarding the <strong>{listing.title}</strong> has been sent to <strong>{listing.sellerName}</strong>.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                A copy of this enquiry and the seller's direct contact details have been sent to <strong>{formData.email}</strong>.
              </p>
              <button
                className="bg-primary hover:bg-accent text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-150 active:scale-98 mx-auto flex items-center justify-center shadow-md mt-6"
                onClick={onClose}
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-4 bg-gray-50 p-3 rounded-xl items-center border border-gray-100">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-[80px] h-[60px] object-cover rounded-lg border border-gray-250 shrink-0"
                />
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-primary-dark line-clamp-1">{listing.title}</h4>
                  <p className="text-sm md:text-base font-extrabold text-primary mt-0.5">
                    {listing.price === 0 ? "POA" : `₹${listing.price.toLocaleString('en-IN')}`}
                  </p>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full p-2.5 border border-gray-200 rounded-xl outline-none text-xs focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-gray-700 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@domain.com"
                    className="w-full p-2.5 border border-gray-200 rounded-xl outline-none text-xs focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-gray-700 font-medium"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 border border-gray-200 rounded-xl outline-none text-xs focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-gray-700 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">PIN Code</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="e.g. 400001"
                  className="w-full p-2.5 border border-gray-200 rounded-xl outline-none text-xs focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-gray-700 font-medium"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2.5 border border-gray-200 rounded-xl outline-none text-xs focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-gray-700 font-medium h-20 resize-none"
                />
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  className="flex-1 py-2.5 border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl font-bold cursor-pointer text-xs transition-colors"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 bg-highlight-orange hover:bg-[#e05c41] text-white border-none rounded-xl font-bold cursor-pointer text-xs transition-colors shadow-sm"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
