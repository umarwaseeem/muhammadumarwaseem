'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        occupation: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const isFormValid = () => {
        return formData.name.trim() !== '' &&
               formData.email.trim() !== '' &&
               formData.occupation.trim() !== '' &&
               formData.message.trim().length >= 100;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Here you would typically send the data to your backend
        // For now, we'll just simulate a submission
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', occupation: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        }
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Alan Turing"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg bg-opacity-10 bg-white border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="alan@enigma-breaker.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg bg-opacity-10 bg-white border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                        <label htmlFor="occupation" className="block text-white text-sm font-medium">What do you do?</label>
                        <div className="group relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white/70 cursor-help">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                            <span className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-12 w-48 bg-black/90 text-white text-xs rounded p-2">
                                I'd like to know more about the person I'm communicating with
                            </span>
                        </div>
                    </div>
                    <input
                        type="text"
                        id="occupation"
                        placeholder="Computer Science Pioneer 🤖"
                        value={formData.occupation}
                        onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg bg-opacity-10 bg-white border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <label htmlFor="message" className="block text-white text-sm font-medium">What can I do for you?</label>
                        <div className="group relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white/70 cursor-help">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                            <span className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-12 w-64 bg-black/90 text-white text-xs rounded p-2">
                                Be creative, have sarcasm even, but also don't leave the message without a clear call to action, else I can't reply to an incomplete message
                            </span>
                        </div>
                    </div>
                    <div className="relative">
                        <textarea
                            id="message"
                            placeholder="I've been thinking about artificial intelligence and this fascinating imitation game..."
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            rows="4"
                            className="w-full px-4 py-2 rounded-lg bg-opacity-10 bg-white border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            required
                        />
                        <div className="absolute bottom-2 right-2 text-xs text-white/70">
                            {formData.message.length}/100
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 disabled:opacity-50"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
                <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
                <p className="text-red-400 text-center mt-4">Something went wrong. Please try again.</p>
            )}
        </form>
    );
} 