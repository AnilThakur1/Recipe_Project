import "./about.css";
function About() {
  return (
  <div className="m_padding width_95 about">
    

  <main class="container">
     {/* Our Story  */}
    <section class="section">
      <h2>Our Story</h2>
      <div class="grid two-cols">
        <div>
          <p>Founded in 2020, our company has been at the forefront of innovation...</p>
          <p>Our journey began with a simple vision...</p>
        </div>
        <div class="card">
          <h3>Quick Facts</h3>
          <ul>
            <li><strong>Founded:</strong> 2020</li>
            <li><strong>Team Size:</strong> 50+ professionals</li>
            <li><strong>Global Presence:</strong> 15+ countries</li>
            <li><strong>Projects Completed:</strong> 200+</li>
          </ul>
        </div>
      </div>
    </section>

  {/* Mission, Vision, Values  */}
    <section class="section grid three-cols">
      <div class="card">
        <h3>Our Mission</h3>
        <p>To empower businesses through innovative technology solutions that drive growth.</p>
      </div>
      <div class="card">
        <h3>Our Vision</h3>
        <p>To be the global leader in transformative technology solutions.</p>
      </div>
      <div class="card">
        <h3>Our Values</h3>
        <ul>
          <li>• Innovation & Excellence</li>
          <li>• Integrity & Transparency</li>
          <li>• Customer-Centric Approach</li>
          <li>• Collaborative Spirit</li>
        </ul>
      </div>
    </section>

    {/* <! Services  */}
    <section class="section">
      <h2>Our Services</h2>
      <div class="grid three-cols">
        <div class="card">
          <h3>Website</h3>
          <p>Custom web applications and responsive websites.</p>
        </div>
        <div class="card">
          <h3>Mobile Apps</h3>
          <p>Native and cross-platform mobile applications.</p>
        </div>
        <div class="card">
          <h3>Cloud Solutions</h3>
          <p>Scalable cloud infrastructure and migration services.</p>
        </div>
        <div class="card">
          <h3>AI & ML</h3>
          <p>AI and ML solutions for data-driven insights.</p>
        </div>
        <div class="card">
          <h3>UI/UX Design</h3>
          <p>User-centered design to enhance experience.</p>
        </div>
        <div class="card">
          <h3>Consulting</h3>
          <p>Strategic consulting to help businesses make informed decisions.</p>
        </div>
      </div>
    </section>

    {/* Team  */}
    <section class="section">
      <h2>Our Leadership Team</h2>
      <div class="grid three-cols">
        <div class="card text-center">
          <div class="avatar blue">B</div>
          <h3>Bikram</h3>
          <p class="position">CEO & Founder</p>
          <p class="desc">15+ years in technology leadership...</p>
        </div>
        <div class="card text-center">
          <div class="avatar purple">R</div>
          <h3>Roshan</h3>
          <p class="position">CTO</p>
          <p class="desc">Technical visionary with deep expertise...</p>
        </div>
        <div class="card text-center">
          <div class="avatar green">S</div>
          <h3>Sudhir</h3>
          <p class="position">COO</p>
          <p class="desc">Operations expert delivering client experiences...</p>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section class="section">
      <h2>Contact Information</h2>
      <div class="grid two-cols">
        <div class="card">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> hello@company.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345</p>
          <p><strong>Business Hours:</strong> Mon-Fri 9AM–6PM, Sat 10AM–4PM</p>
        </div>
        <div class="card text-center">
          <h3>Our Location</h3>
          <div class="map-placeholder">Interactive Map</div>
        </div>
      </div>
    </section>

     {/* Awards */}
    <section class="section grid two-cols">
      <div class="card">
        <h3>Certifications & Awards</h3>
        <ul>
          <li>• ISO 9001:2015</li>
          <li>• AWS Advanced Partner</li>
          <li>• Microsoft Gold Partner</li>
          <li>• Best Tech Company 2023</li>
          <li>• Innovation Award 2022</li>
        </ul>
      </div>
      <div class="card">
        <h3>Industry Recognition</h3>
        <ul>
          <li>• TechCrunch Feature</li>
          <li>• Forbes 30 Under 30</li>
          <li>• Gartner Magic Quadrant</li>
          <li>• Inc. 5000</li>
          <li>• Deloitte Fast 500</li>
        </ul>
      </div>
    </section>

    {/* CTA  */}
    <section class="cta">
      <h2>Ready to Work Together?</h2>
      <p>Let's discuss how we can help transform your business with innovative solutions.</p>
      <button>Start Your Project</button>
    </section>
  </main>
  </div>
 
  )

  
}
export default About;
