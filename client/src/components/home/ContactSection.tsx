import React, { useState } from 'react';
import { isValidEmail, isValidPhone } from '@/lib/utils';
import { apiRequest } from '@/lib/queryClient';

interface FormData {
  name: string;
  email: string;
  phone: string;
  artist: string;
  date: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  artist: '',
  date: '',
  message: ''
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.date) {
      newErrors.date = 'Event date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to a backend
      await apiRequest('POST', '/api/contact', formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gold-underline">Get In Touch</h2>
          <p className="text-xl max-w-3xl mx-auto">Ready to elevate your event? Contact us to book your preferred artists</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="scroll-animation">
            <form id="contact-form" className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold mb-6">Inquire Now</h3>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your inquiry! We will contact you soon.
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-gold`} 
                  required 
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-gold`} 
                  required 
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-gold`} 
                  required 
                />
                {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="artist" className="block mb-2 font-medium">Artist Requirement</label>
                <select 
                  id="artist" 
                  name="artist" 
                  value={formData.artist}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="">Select Artist Category</option>
                  <option value="singer">Singer</option>
                  <option value="magician">Magician</option>
                  <option value="speaker">Motivational Speaker</option>
                  <option value="multiple">Multiple Artists</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="date" className="block mb-2 font-medium">Event Date</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-gold`} 
                  required 
                />
                {errors.date && <p className="mt-1 text-red-500 text-sm">{errors.date}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Additional Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gold text-black py-3 px-6 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-300 flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Send Inquiry'}
              </button>
            </form>
          </div>
          
          <div className="scroll-animation" style={{transitionDelay: '300ms'}}>
            <div className="bg-black text-white p-8 rounded-lg shadow-lg h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <i className="fas fa-map-marker-alt text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p>Mumbai, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <i className="fas fa-phone-alt text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p>+91 9833 144 4052</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <i className="fas fa-envelope text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p>shilpahirani28@yahoo.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <i className="fas fa-clock text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/supernova_artist_management?igsh=MXh1NnY3aHFrd3JsNQ==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-gold-dark rounded-full flex items-center justify-center text-black hover:bg-gold transition-colors duration-300"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gold-dark rounded-full flex items-center justify-center text-black hover:bg-gold transition-colors duration-300"
                  >
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gold-dark rounded-full flex items-center justify-center text-black hover:bg-gold transition-colors duration-300"
                  >
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
