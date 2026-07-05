import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export default function DetailSidebar({ listing, onEnquireSuccess }) {
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: '',
    message: `Hi, I am interested in your listing: "${listing.title}". Please contact me with more information.`
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setPhoneRevealed(false);
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      pincode: '',
      message: `Hi, I am interested in your listing: "${listing.title}". Please contact me with more information.`
    });
  }, [listing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in your Name, Email, and Phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      if (onEnquireSuccess) {
        onEnquireSuccess(listing.title);
      }
    }, 1200);
  };

  const getMaskedPhone = (phone) => {
    if (!phone) return "";
    const parts = phone.split(" ");
    if (parts.length > 1) {
      return `${parts[0]} ${parts[1].slice(0, 2)}XX XXXX`;
    }
    return `${phone.slice(0, 5)} XXX-XXX`;
  };

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 h-fit lg:sticky lg:top-24">
        <div className="text-center mb-5 pb-4 border-b border-gray-100">
          <div className="w-14 h-14 rounded-full bg-primary-dark text-white flex items-center justify-center text-xl font-bold mx-auto mb-2.5 font-display select-none">
            {listing.sellerName.charAt(0)}
          </div>
          <h3 className="text-base font-bold text-primary-dark">{listing.sellerName}</h3>
          <span className="bg-gray-100 text-gray-500 text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mt-1">
            {listing.sellerType} Listing
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <button
            className="w-full flex items-center justify-center gap-2 p-3 bg-white border-2 border-dashed border-primary hover:bg-primary/5 text-primary rounded-xl font-bold cursor-pointer transition-all duration-200 outline-none"
            onClick={() => setPhoneRevealed(!phoneRevealed)}
          >
            <Phone size={15} />
            {phoneRevealed ? listing.sellerPhone : `Call: ${getMaskedPhone(listing.sellerPhone)}`}
          </button>

          <div className="text-center text-[10px] text-gray-400 font-medium">
            {phoneRevealed ? "Mention trucksales when calling" : "Click to show number"}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <h4 className="text-xs font-bold text-primary-dark uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <MessageSquare size={14} className="text-primary" />
            Enquire on vehicle
          </h4>

          {formSubmitted ? (
            <div className="text-center py-6 px-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck size={26} />
              </div>
              <h4 className="text-emerald-800 font-bold mb-1.5 text-sm">Enquiry Sent!</h4>
              <p className="text-xs text-gray-500 leading-normal">
                Your details have been passed to the seller. They will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Name *</label>
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

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="rajesh@domain.com"
                  className="w-full p-2.5 border border-gray-200 rounded-xl outline-none text-xs focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-gray-700 font-medium"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Phone *</label>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 bg-highlight-orange hover:bg-[#e05c41] text-white rounded-xl font-bold cursor-pointer text-xs transition-colors shadow-sm mt-1"
              >
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
              </button>

              <div className="flex gap-1.5 items-center mt-1 text-[9px] text-gray-400 leading-normal font-medium">
                <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                <span>Secure request sent via trucksales safety connection.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
