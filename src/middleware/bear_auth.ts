import { error } from 'console';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend Express Request type to include Employee object
declare global {
  namespace Express {
    interface Request {
      Employee?: {
        employee_id: number;
        email: string;
        role: string;
        first_name: string;
        last_name: string;
      };
    }
  }
}

// Middleware to authenticate JWT
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      });
    }

    const token = authHeader.split(' ')[1];
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
    
      return res.status(500).json({
        success: false,
        message: 'Server configuration error — JWT secret missing.'
      });
    }

    // Verify and decode the JWT
    const decoded = jwt.verify(token, jwtSecret) as any;

    // Support both token formats: new and legacy
    req.Employee = {
      employee_id: decoded.employee_id || decoded.sub,  //handle both
      email: decoded.email || '',
      role: decoded.role || 'user',                 // default to 'Employee'
      first_name: decoded.first_name || '',
      last_name: decoded.last_name || ''
    };

    // Extra safety check
    if (!req.Employee.employee_id) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized — Employee ID missing in token.'
      });
    }

    next();
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token has expired. Please login again.'
      });
    }

    return res.status(401).json({
      success: false,
      message: 'Invalid or malformed token.'
    });
  }
};

// Middleware for role-based access
export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log (roles);
    if (!req.Employee) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized — User not authenticated.'
      });
    }

    if (!roles.includes(req.Employee.role)) {
      return res.status(403).json({
        success: false,
        message: `Forbidden — required role: ${roles.join(' or ')}. Your role: ${req.Employee.role}`
      });
    }

    next();
  };
};
