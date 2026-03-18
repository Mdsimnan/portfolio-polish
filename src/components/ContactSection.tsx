import { User, Phone, Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-16 sm:py-20 px-4 sm:px-8">
    <h2 className="font-display text-2xl sm:text-3xl gradient-text mb-8">Contact</h2>
    <div className="bg-card rounded-xl glow-border p-6 sm:p-8 space-y-4">
      {[
        { icon: User, label: "Name", value: "Mohammed Simnanuddin" },
        { icon: Phone, label: "Phone", value: "+91 8904186955" },
        { icon: Mail, label: "Email", value: "md15arbaz@gmail.com", href: "mailto:md15arbaz@gmail.com" },
        { icon: Linkedin, label: "LinkedIn", value: "mohammed-simnanuddin", href: "https://www.linkedin.com/in/mohammed-simnanuddin-8bb7ba228" },
        { icon: Github, label: "GitHub", value: "mdsimnan", href: "https://github.com/mdsimnan" },
        { icon: MapPin, label: "Location", value: "Raichur, Karnataka" },
      ].map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-primary shrink-0" />
          <span className="text-sm text-muted-foreground font-display text-xs tracking-wider">{label}:</span>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline break-all">
              {value}
            </a>
          ) : (
            <span className="text-sm text-foreground">{value}</span>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default ContactSection;
