import dotenv from 'dotenv';


dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 12345;





export const fire = {
    firebase: {
        apiKey: "AIzaSyC9aVxAL1jurkeppPhV0baXN-gWpDMGZV0",
        authDomain: "node-portfolio-e56c3.firebaseapp.com",
        projectId: "node-portfolio-e56c3",
        storageBucket: "node-portfolio-e56c3.firebasestorage.app",
        messagingSenderId: "422218756595",
        appId: "1:422218756595:web:4d74a5ccba6784ef2c6286",
        measurementId: "G-J53707ZWJL"
    }
    
}



export const server = {
    SERVER_HOSTNAME,
    SERVER_PORT
};
