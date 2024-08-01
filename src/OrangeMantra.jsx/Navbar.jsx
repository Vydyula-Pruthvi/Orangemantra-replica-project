import React from 'react'
import './App.css'

const Navbar = () => {
  return (
    <>

        <div className='container-fluid'>
        <div className='row'>
        <div className='col-sm-2'>
        <img src='https://orangemantratechnologysolutions.files.wordpress.com/2022/03/orangemantra-logo.png' width={120} id='img'/>
        </div>

        <div className='col-sm-8'>
        

        <div class="nav">
   <div class="container text-dark">
      <nav class="navbar navbar-expand-lg navbar-light">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" 
            aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         
         <div class="collapse navbar-collapse justify-content-center lh-lg" id="main_nav">
            <ul class="navbar-nav p-md-0">
               <li class="nav-item"> <a class="nav-link active" href="#">Success Stories</a> </li>
               <li class="nav-item dropdown">
                  <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown">Technologies </a>
                  
                  <ul class="dropdown-menu">
                  <li>
                        <a class="dropdown-item" href="#"> Emerging Technologies (AI, ML, IOT)<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu">
                        <li><a class="dropdown-item" href="#">Artificial Intelligence</a></li>
                        <li><a class="dropdown-item" href="#">IOT</a></li>
                        <li><a class="dropdown-item" href="#">Chat GPT</a></li>
                        <li><a class="dropdown-item" href="#">Big Data</a></li>
                        <li><a class="dropdown-item" href="#">RPA</a></li>
                        <li><a class="dropdown-item" href="#">Machine Learning</a></li>
                        <li><a class="dropdown-item" href="#">Natural Language Processing</a></li>
                       
                           <li class="nav-item dropdown">
                  <a class="nav-linkk dropdown-toggle text-dark p-3" href="#" data-bs-toggle="dropdown">Black Chain </a>
                  <div class="submenu dropdown-menu mega-submenu p-3">
                  <li><a class="dropdown-item" href="#">ICO Solutions</a></li>
                  <li><a class="dropdown-item" href="#">IEO Solutions</a></li>
                  <li><a class="dropdown-item" href="#">STO Solutions</a></li>
                  <li><a class="dropdown-item" href="#">DApp Development</a></li>
                  <li><a class="dropdown-item" href="#">Crypto Currency Exchange Etc.</a></li>

                  
                  
                  
                  </div>
                  
                  </li>

                           </div>
                     </li>

                     <li>
                        <a class="dropdown-item" href="#"> Web Application Development Framework<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                        <li><a class="dropdown-item" href="#">
                              .NET
                           </a></li>
                           <li><a class="dropdown-item" href="#">PHP</a></li>
                           <li><a class="dropdown-item" href="#">MERN</a></li>
                           <li><a class="dropdown-item" href="#">CakePHP</a></li>
                           <li><a class="dropdown-item" href="#">ExpressJS</a></li>
                           <li><a class="dropdown-item" href="#">VueJS</a></li>
                           <li><a class="dropdown-item" href="#">Python</a></li>
                           <li><a class="dropdown-item" href="#">SharePoint</a></li>
                           <li><a class="dropdown-item" href="#">Laravel</a></li>
                           <li><a class="dropdown-item" href="#">Node.JS</a></li>
                           <li><a class="dropdown-item" href="#">ReactJs</a></li>
                           <li><a class="dropdown-item" href="#">Knockout.js</a></li>
                           <li><a class="dropdown-item" href="#">MEAN</a></li>
                           <li><a class="dropdown-item" href="#">Salesforce</a></li>
                           <li><a class="dropdown-item" href="#">CodeIgniter</a></li>
                           <li><a class="dropdown-item" href="#">Angular.js</a></li>
                           <li><a class="dropdown-item" href="#">Meteor.js</a></li>
                           <li><a class="dropdown-item" href="#">JAVA</a></li>

                        </div>
                     </li>

                     <li>
                        <a class="dropdown-item" href="#"> Mobile Application Development<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <li><a class="dropdown-item" href="#">Hybrid App</a></li>
                           <li><a class="dropdown-item" href="#">Android</a></li>
                           <li><a class="dropdown-item" href="#">iOS</a></li>
                           <li><a class="dropdown-item" href="#">PWAS</a></li>
                           <li><a class="dropdown-item" href="#">Kotlin cross-plotform Apps</a></li>
                           <li><a class="dropdown-item" href="#">Mobile Maintenance & Support</a></li>
                           <li><a class="dropdown-item" href="#"> Cross Plotform Applications</a></li>
                        </div>
                     </li>

                     <li>
                        <a class="dropdown-item" href="#"> Content Management System <strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                        <li><a class="dropdown-item" href="#">Shopify</a></li>
                        <li><a class="dropdown-item" href="#">Magento</a></li>
                        <li><a class="dropdown-item" href="#">Drupal</a></li>
                        <li><a class="dropdown-item" href="#">WooCommerce</a></li>
                        <li><a class="dropdown-item" href="#">Prestashop</a></li>
                        <li><a class="dropdown-item" href="#">CS-Cart</a></li>
                        <li><a class="dropdown-item" href="#">Open Cart</a></li>
                        <li><a class="dropdown-item" href="#">Big Commerce</a></li>
                        <li><a class="dropdown-item" href="#">Headless Developments</a></li>
                          
                        </div>
                     </li>

                     <li>
                        <a class="dropdown-item" href="#"> Cloud, DevOps, DevSec Ops<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                        <li><a class="dropdown-item" href="#">DevOps Engineering</a></li>
                        <li><a class="dropdown-item" href="#">AWS Cloud Solutions</a></li>
                        <li><a class="dropdown-item" href="#">Cloud Hosting</a></li>
                        <li><a class="dropdown-item" href="#">Azure Cloud Solution</a></li>
                        <li><a class="dropdown-item" href="#">AWS Managed Services</a></li>
                        <li><a class="dropdown-item" href="#">GCP Solutions</a></li>
                        <li><a class="dropdown-item" href="#">Cloud Architecture</a></li>
                        <li><a class="dropdown-item" href="#">Cyber Security</a></li>
                        <li><a class="dropdown-item" href="#">Cloud Migration</a></li>
                        <li><a class="dropdown-item" href="#">VAPT</a></li>
                          
                        </div>
                     </li>

                     <li>
                        <a class="dropdown-item" href="#"> Custom Application Development<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                        <li><a class="dropdown-item" href="#">ERP</a></li>
                        <li><a class="dropdown-item" href="#">CRM</a></li>
                        <li><a class="dropdown-item" href="#">HRMS</a></li>
                        <li><a class="dropdown-item" href="#">SFAs</a></li>
                        <li><a class="dropdown-item" href="#">LMS</a></li>
                        <li><a class="dropdown-item" href="#">Process Harmonization Solution</a></li>
                        <li><a class="dropdown-item" href="#">Digital Sales Solutions</a></li>
                        <li><a class="dropdown-item" href="#">Workflow Management Solutions</a></li>
                         
                        </div>
                     </li>

                     <li>
                        <a class="dropdown-item" href="#">Enterprise Application Development<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                        <li><a class="dropdown-item" href="#">Share Point Development</a></li>
                        <li><a class="dropdown-item" href="#">Software Product Development</a></li>
                        <li><a class="dropdown-item" href="#">Application Development & Maintenance</a></li>
                        <li><a class="dropdown-item" href="#">Tableau Dashboards</a></li>
                        <li><a class="dropdown-item" href="#">Enterprise Software Solutions </a></li>
                        
                        <li class="nav-item dropdown">
                  <a class="nav-linkk dropdown-toggle text-dark p-3" href="#" data-bs-toggle="dropdown">Salesforce Solutions </a>
                  <div class="submenu dropdown-menu mega-submenu p-3">
                  <li><a class="dropdown-item" href="#">Salesforce Managed Services</a></li>
                  <li><a class="dropdown-item" href="#">Salesforce Implementation</a></li>
                  <li><a class="dropdown-item" href="#">Salesforce Sales Cloud</a></li>
                  <li><a class="dropdown-item" href="#">Salesforce Integration</a></li>
                  <li><a class="dropdown-item" href="#">Salesforce Service Cloud</a></li>
                  <li><a class="dropdown-item" href="#">Salesforce Automation</a></li>
               
                 </div>
                 </li>
                  <li><a class="dropdown-item" href="#">Headless Department</a></li>
                  <li><a class="dropdown-item" href="#">Process Hormonization</a></li>
                   <li><a class="dropdown-item" href="#">Workflow Solutions</a></li>
                     
                   <li class="nav-item dropdown">
                  <a class="nav-linkk dropdown-toggle text-dark p-3" href="#" data-bs-toggle="dropdown">Dashoard </a>
                  <div class="submenu dropdown-menu mega-submenu p-3">
                  <li><a class="dropdown-item" href="#">Marketing Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Sales Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">HR Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Operational Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Finance Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Project Management Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Dashboards for Management</a></li>
                  <li><a class="dropdown-item" href="#">Enterprise Dashboard</a></li>
                  </div>
                  </li>
                        </div>
                     </li>
                     
                  </ul>
               </li>
               
               <li class="nav-item dropdown">
                  <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown">Services </a>
                  
                  <ul class="dropdown-menu">
                     <li>
                        <a class="dropdown-item" href="#">eCommerce<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                  <li><a class="dropdown-item" href="#">Customization</a></li>
                  <li><a class="dropdown-item" href="#">B2C Commerce</a></li>
                  <li><a class="dropdown-item" href="#">B2B Commerce</a></li>
                  <li><a class="dropdown-item" href="#">Omnichannel</a></li>
                  <li><a class="dropdown-item" href="#">Chatgpt Integration</a></li>
                  </div>
</li>
                     <li>
                        <a class="dropdown-item" href="#">Prototyping & UI/UX<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                  <li><a class="dropdown-item" href="#">Low-Fidelity Prototypes</a></li>
                  <li><a class="dropdown-item" href="#">High-Fidelity Prototypes</a></li>
                  <li><a class="dropdown-item" href="#">Rapid Prototypes</a></li>
                  <li><a class="dropdown-item" href="#">MVPs</a></li>
                  <li><a class="dropdown-item" href="#">UI/UX Design</a></li>
                  
                     </div></li>
                     <li>
                        <a class="dropdown-item" href="#">Enterprise Digital Transformation<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                  <li><a class="dropdown-item" href="#">Enterprise Software Solutions</a></li>
                  <li><a class="dropdown-item" href="#">Salesforce Solutions</a></li>
                  <li><a class="dropdown-item" href="#">Process Harmonization</a></li>
                  <li><a class="dropdown-item" href="#">Workflow Solutions</a></li>
                  <li><a class="dropdown-item" href="#">Metaverse Development</a></li>


                     </div></li>
<li>
                        <a class="dropdown-item" href="#">Product Engineering<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                        
                  <li><a class="dropdown-item" href="#">Product Design</a></li>
                  <li><a class="dropdown-item" href="#">Product Development</a></li>
                  <li><a class="dropdown-item" href="#">Solution Architecture</a></li>
                  <li><a class="dropdown-item" href="#">Tech Support</a></li>
                  <li><a class="dropdown-item" href="#">Product Application Catalogue</a></li>
                  </div></li>
<li>
                        <a class="dropdown-item" href="#">IoT<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                  <li><a class="dropdown-item" href="#">Industrial IoT</a></li>
                  <li><a class="dropdown-item" href="#">Connected Tech</a></li>
                  <li><a class="dropdown-item" href="#">IoT integration</a></li>
                  <li><a class="dropdown-item" href="#">facility Monitoring</a></li>
</div></li>
<li>
                        <a class="dropdown-item" href="#">Mobile Apps<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                  <li><a class="dropdown-item" href="#">Android</a></li>
                  <li><a class="dropdown-item" href="#">iOS</a></li>
                  <li><a class="dropdown-item" href="#">Hybrid</a></li>
                  <li><a class="dropdown-item" href="#">PWAS</a></li>

                  </div></li>
                        

                        <li>
                        <a class="dropdown-item" href="#">DevOps<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">

                  <li><a class="dropdown-item" href="#">DevOps Engineering</a></li>
                  <li><a class="dropdown-item" href="#">Cloud Hosting</a></li>
                  <li><a class="dropdown-item" href="#">Cybersecurity</a></li>
                  <li><a class="dropdown-item" href="#">Cloud Migration</a></li>
</div></li>
<li>
                        <a class="dropdown-item" href="#">Automation<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">

                  <li><a class="dropdown-item" href="#">Intelligent Automation</a></li>
                  <li><a class="dropdown-item" href="#">Process Automation</a></li>
                  <li><a class="dropdown-item" href="#">HR Automation</a></li>
                  <li><a class="dropdown-item" href="#">Sales & Marketing Automation</a></li>
                  </div></li>
<li>
                        <a class="dropdown-item" href="#">Custom Framework<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">

                  <li><a class="dropdown-item" href="#">Java</a></li>
                  <li><a class="dropdown-item" href="#">PHP</a></li>
                  <li><a class="dropdown-item" href="#">Dotnet</a></li>
                  <li><a class="dropdown-item" href="#">Nodejs</a></li>
                  </div></li>
<li>
                        <a class="dropdown-item" href="#">Testing & QA<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                        
                  <li><a class="dropdown-item" href="#">Manual</a></li>
                  <li><a class="dropdown-item" href="#">Automation</a></li>
                  <li><a class="dropdown-item" href="#">Functional</a></li>
                  <li><a class="dropdown-item" href="#">VAPT</a></li>
                  </div></li>
<li>
                        <a class="dropdown-item" href="#">Digital Marketing<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">

                  <li><a class="dropdown-item" href="#">SEO</a></li>
                  <li><a class="dropdown-item" href="#">ORM</a></li>
                  <li><a class="dropdown-item" href="#">SMO</a></li>
                  <li><a class="dropdown-item" href="#">Content Marketing</a></li>
                  </div></li>
<li>
                        <a class="dropdown-item" href="#">Emerging Tech<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">

                  <li><a class="dropdown-item" href="#">Machine Learning</a></li>
                  <li><a class="dropdown-item" href="#">AI</a></li>
                  <li><a class="dropdown-item" href="#">Data Analytics</a></li>
                  <li><a class="dropdown-item" href="#">Blockchain</a></li>
                  </div></li>
<li>
                        <a class="dropdown-item" href="#">Dashboard Development<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">

                  <li><a class="dropdown-item" href="#">Marketing Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Sales Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">HR Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Operational Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Finance Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Project Management Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Dashboards for Management</a></li>
                  <li><a class="dropdown-item" href="#">Enterprise Dashboard</a></li>
                  </div></li>

                      
                 
                 
         
                  
                  
                  </ul></li>
               

                  <li class="nav-item dropdown">
                  <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown">Industries</a>
                  <ul class="dropdown-menu">
                  
                  <li><a class="dropdown-item" href="#">Automotives</a></li>
                  <li><a class="dropdown-item" href="#">Real Estate</a></li>
                  <li><a class="dropdown-item" href="#">Manufacturing</a></li>
                  <li><a class="dropdown-item" href="#">BFSI</a></li>
                  <li><a class="dropdown-item" href="#">Energy & Mining</a></li>
                  <li><a class="dropdown-item" href="#">Food & Beverages</a></li>
                  <li><a class="dropdown-item" href="#">Healthcare</a></li>
                  <li><a class="dropdown-item" href="#">Media & Entertainment</a></li>
                  <li><a class="dropdown-item" href="#">Retail</a></li>
                  <li><a class="dropdown-item" href="#">Technology</a></li>
                  <li><a class="dropdown-item" href="#">Transportation</a></li>
                  </ul></li>

                  <li class="nav-item dropdown">
                  <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown">Hire Developers</a>
                
                  <ul class="dropdown-menu">
                  
                    
                     <li>
                        <a class="dropdown-item" href="#">Backend<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                     <li><a class="dropdown-item" href="#">.NET</a></li>
                     <li><a class="dropdown-item" href="#">PHP</a></li>
                     <li><a class="dropdown-item" href="#">Python</a></li>
                     <li><a class="dropdown-item" href="#">Java</a></li>
                     <li><a class="dropdown-item" href="#">GraphQL</a></li>
                           
                           </span>
                        </div>
                     </li>
                     <li>
                        <a class="dropdown-item" href="#">Frontend<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                     <li><a class="dropdown-item" href="#">Angular</a></li>
                     <li><a class="dropdown-item" href="#">React</a></li>
                     <li><a class="dropdown-item" href="#">HTML/CSS</a></li>
                     <li><a class="dropdown-item" href="#">Vue Js</a></li>
                      
                           </span>
                        </div>
                     </li>
                     <li>
                        <a class="dropdown-item" href="#">DevOps<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                     <li><a class="dropdown-item" href="#">AWS</a></li>
                     <li><a class="dropdown-item" href="#">AZure</a></li>
                     <li><a class="dropdown-item" href="#">GCP</a></li>
                     <li><a class="dropdown-item" href="#">Cybersecurity</a></li>
                        
                           </span>
                        </div>
                     </li>
                     <li>
                        <a class="dropdown-item" href="#">Mobile<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                     <li><a class="dropdown-item" href="#">Android</a></li>
                     <li><a class="dropdown-item" href="#">iOS</a></li>
                     <li><a class="dropdown-item" href="#">React Native</a></li>
                     <li><a class="dropdown-item" href="#">Flutter</a></li>
                            
                           </span>
                        </div>
                     </li>
                     <li>
                        <a class="dropdown-item" href="#">QA<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                     <li><a class="dropdown-item" href="#">Mannual</a></li>
                     <li><a class="dropdown-item" href="#">Automation</a></li>
                            
                           </span>
                        </div>
                     </li>
                     <li>
                        <a class="dropdown-item" href="#">JS<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                     <li><a class="dropdown-item" href="#">React Js</a></li>
                     <li><a class="dropdown-item" href="#"> Angular Js</a></li>
                     <li><a class="dropdown-item" href="#">Node.Js</a></li>
                     <li><a class="dropdown-item" href="#">Vue Js</a></li>
                           
                           </span>
                        </div>
                     </li>
                     <li>
                        <a class="dropdown-item" href="#">Web<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                     <li><a class="dropdown-item" href="#">Laravel</a></li>
                     <li><a class="dropdown-item" href="#">Python</a></li>
                     <li><a class="dropdown-item" href="#">PHP</a></li>
                     <li><a class="dropdown-item" href="#">WordPress</a></li>
                     <li><a class="dropdown-item" href="#">Drupal</a></li>
                           
                           </span>
                        </div>
                     </li>
                     <li>
                        <a class="dropdown-item" href="#">E-Commerce<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                     <li><a class="dropdown-item" href="#">Magento</a></li>
                     <li><a class="dropdown-item" href="#">Shopify</a></li>
                     <li><a class="dropdown-item" href="#">Drupal</a></li>
                     <li><a class="dropdown-item" href="#">WooCommerce</a></li>
                           
                           </span>
                        </div>
                     </li>
                     <li>
                        <a class="dropdown-item" href="#">Enterprise<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                     <li><a class="dropdown-item" href="#">Salesfroce</a></li>
                     <li><a class="dropdown-item" href="#">DevOps</a></li>
                     <li><a class="dropdown-item" href="#">Big Data</a></li>
                     <li><a class="dropdown-item" href="#">SharePoint</a></li>
                         
                           </span>
                        </div>
                     </li>
                     <li>
                        <a class="dropdown-item" href="#">CMS<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                           <li><a class="dropdown-item" href="#">Magento</a></li>
                           <li><a class="dropdown-item" href="#">Drupal</a></li>
                           <li><a class="dropdown-item" href="#">WordPress</a></li>
                           <li><a class="dropdown-item" href="#">Sitecore</a></li>
                           <li><a class="dropdown-item" href="#">Kentico</a></li>
            
                           </span>
                        </div>
                     </li>
                     <li>
                        <a class="dropdown-item" href="#">OPS<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu p-3">
                           <span>
                           <li><a class="dropdown-item" href="#"> Project Managers</a></li>
                           <li><a class="dropdown-item" href="#">Agile Coaches</a></li>
                           <li><a class="dropdown-item" href="#">HR Professionals</a></li>
                           <li><a class="dropdown-item" href="#">Scrum Masters</a></li>
             
                           </span>
                        </div>
                     </li>
                     
                    
                  </ul>
               </li>
               
               <li class="nav-item dropdown">
                  <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown">Company </a>
                  <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">About Us</a></li>
                     <li><a class="dropdown-item" href="#">Clients</a></li>
                     <li><a class="dropdown-item" href="#">Global Clients</a></li>
                     <li><a class="dropdown-item" href="#">Testimonials</a></li>
                     <li><a class="dropdown-item" href="#">White Label Partnership</a></li>
                     <li>
                     {/* <li><a class="dropdown-item" href="#">Engagement</a></li> */}
                     <a class="dropdown-item" href="#">Engagement<strong class="float-end">&raquo;</strong> </a>
                     
                     <div class="submenu dropdown-menu mega-submenu p-3">

                     <li><a class="dropdown-item" href="#">Staff Augmentation</a></li>
                     <li><a class="dropdown-item" href="#">Product Development</a></li>
                     <li><a class="dropdown-item" href="#">ADM</a></li>

                     </div>
                     </li>
                     <li><a class="dropdown-item" href="#">Insights</a></li>
                     <li><a class="dropdown-item" href="#">Award&Media</a></li>
                     <li><a class="dropdown-item" href="#">CSR</a></li>
                     <li><a class="dropdown-item" href="#">Job Openings</a></li>
                     <li><a class="dropdown-item" href="#">Careers</a></li>



                   
                  </ul>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown">Portfolio </a>
                  <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">Ecommerce</a></li>
                     <li><a class="dropdown-item" href="#">Mobile Apps</a></li>
                     <li><a class="dropdown-item" href="#">Digital Transformation</a></li>
                     <li><a class="dropdown-item" href="#">Smart Application</a></li>
                     <li><a class="dropdown-item" href="#">AI Solutions</a></li>
                     <li><a class="dropdown-item" href="#">Social Communities</a></li>
                     <li><a class="dropdown-item" href="#">Digital Marketing</a></li>
                     <li><a class="dropdown-item" href="#">UI/UX Portfolio</a></li>
                     <li><a class="dropdown-item" href="#">International Portfolio</a></li>
                     <li><a class="dropdown-item" href="#">Web Portfolio</a></li>
                    



                   
                  </ul>
               </li>
               
              
               
            </ul>
         </div>
      </nav>
   </div>
</div>
</div>
                  
        <div className='col-sm-2' id='contact'>
        <button type="button" class="btn btn-danger">Contact Us</button>
        </div>
        </div>

        
</div>


</>
)
}

export default Navbar