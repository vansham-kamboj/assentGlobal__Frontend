import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Building, ArrowRight, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Sign up data:', formData);
    } else {
      console.log('Login data:', { email: formData.email, password: formData.password });
    }
  };

  return (
    <div className="auth-split-screen">
      
      {/* --- LEFT SIDE: FORM --- */}
      <div className="auth-left">
        <div className="auth-wrapper">
          
          <div className="auth-header">
            <div className="brand-logo">
              <div className="logo-dot"></div> Webinar<span className="text-green">Pro</span>
            </div>
            <h1 className="auth-title">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="auth-subtitle">
              {isSignUp 
                ? 'Start your 30-day free trial. Cancel anytime.' 
                : 'Please enter your details to sign in.'
              }
            </p>
          </div>

          <form className="modern-form" onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <div className="form-row">
                  <div className="input-group">
                    <label>First Name</label>
                    <div className="input-wrapper">
                      <User size={18} className="field-icon"/>
                      <input 
                        type="text" 
                        name="firstName" 
                        placeholder="e.g. Sarah"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Last Name</label>
                    <div className="input-wrapper">
                      <User size={18} className="field-icon"/>
                      <input 
                        type="text" 
                        name="lastName" 
                        placeholder="e.g. Johnson"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div className="input-group">
                  <label>Company Name</label>
                  <div className="input-wrapper">
                    <Building size={18} className="field-icon"/>
                    <input 
                      type="text" 
                      name="companyName" 
                      placeholder="e.g. Acme Corp"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
              </>
            )}

            <div className="input-group">
              <label>Email</label>
              <div className="input-wrapper">
                <Mail size={18} className="field-icon"/>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="field-icon"/>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  name="password" 
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required 
                />
                <button 
                  type="button" 
                  className="eye-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="form-actions">
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isSignUp ? 'Create Account' : 'Sign in'} <ArrowRight size={18} />
            </button>

            <button type="button" className="google-btn">
              <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          </form>

          <div className="auth-footer">
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Log in' : 'Sign up'}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: VISUAL --- */}
      <div className="auth-right">
        <div className="visual-content">
          <div className="floating-card">
            {/* Minimal Mockup of your Webinar Card */}
            <div className="mock-card-top">
              <span className="mock-pill">LEADERSHIP</span>
              <span className="mock-date">Dec 18</span>
            </div>
            <h3 className="mock-title">Advanced Leadership Strategies for Managers</h3>
            <div className="mock-divider"></div>
            <div className="mock-bottom">
              <div className="mock-instructor">
                <div className="mock-avatar"></div>
                <div className="mock-lines">
                  <div className="line lg"></div>
                  <div className="line sm"></div>
                </div>
              </div>
              <div className="mock-btn"></div>
            </div>
          </div>
          
          <div className="visual-text">
            <h2>Level up your career</h2>
            <p>Join 15,000+ professionals mastering new skills through live interactive sessions.</p>
            <div className="feature-pills">
               <span><CheckCircle2 size={14}/> Live Q&A</span>
               <span><CheckCircle2 size={14}/> Certificates</span>
               <span><CheckCircle2 size={14}/> Recordings</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;