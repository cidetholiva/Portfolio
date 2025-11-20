import { Github, Linkedin, Download, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS REST API configuration
      // Replace these with your actual EmailJS credentials from https://www.emailjs.com/
      const serviceID = 'service_nuelgza'; // e.g., 'service_abc123'
      const templateID = '__ejs-test-mail-service__'; // e.g., 'template_xyz456'
      const publicKey = 'FrBeG3IwfeE8NNYVi'; // e.g., 'abcdef123456'

      // Check if EmailJS is configured
      if (serviceID === 'service_nuelgza' || templateID === '__ejs-test-mail-service__' || publicKey === 'FrBeG3IwfeE8NNYVi') {
        // Fallback to mailto if EmailJS is not configured
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:cidetholiva@gmail.com?subject=${subject}&body=${body}`;
        
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus('idle'), 5000);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'cidetholiva@gmail.com',
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email');
      }
      
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" }); // Clear form
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-8 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-peach-400/20 to-rose-400/20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300/10 via-apricot-300/10 to-rose-300/10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-6xl gradient-text mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-foreground/70">
            I'm always excited to collaborate on meaningful projects
          </p>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://github.com/cidetholiva"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-strong rounded-full px-6 py-3 flex items-center gap-3 glow-pink hover:scale-105 transition-transform"
          >
            <Github className="w-5 h-5 text-rose-500" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/cideth-oliva"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-strong rounded-full px-6 py-3 flex items-center gap-3 glow-peach hover:scale-105 transition-transform"
          >
            <Linkedin className="w-5 h-5 text-rose-500" />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="glass-strong rounded-full px-6 py-3 flex items-center gap-3 glow-pink hover:scale-105 transition-transform"
          >
            <Download className="w-5 h-5 text-rose-500" />
            Resume
          </a>
        </div>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="glass-strong rounded-[3rem] p-10 space-y-6 glow-warm">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/20 border border-green-500/30 text-green-700 dark:text-green-300">
              <CheckCircle className="w-5 h-5" />
              <p>Your email client will open to send the message. If it doesn't, please email me directly at cidetholiva@gmail.com</p>
            </div>
          )}
          
          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/20 border border-red-500/30 text-red-700 dark:text-red-300">
              <AlertCircle className="w-5 h-5" />
              <p>Failed to send message. Please try again or email me directly at cidetholiva@gmail.com</p>
            </div>
          )}
          
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm text-foreground/80">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full glass rounded-2xl px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 focus:border-pink-400/50 focus:outline-none focus:ring-2 focus:ring-pink-400/30 transition-all"
              placeholder="Cideth Oliva"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-foreground/80">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full glass rounded-2xl px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 focus:border-pink-400/50 focus:outline-none focus:ring-2 focus:ring-pink-400/30 transition-all"
              placeholder="hello@example.com"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm text-foreground/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full glass rounded-2xl px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 focus:border-pink-400/50 focus:outline-none focus:ring-2 focus:ring-pink-400/30 transition-all resize-none"
              placeholder="Tell me about your project..."
              required
              disabled={isSubmitting}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full glass-strong rounded-full px-8 py-4 flex items-center justify-center gap-3 glow-pink hover:scale-105 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Send className="w-5 h-5 text-rose-500 group-hover:translate-x-1 transition-transform" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}