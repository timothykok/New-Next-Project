import { Inter, Lusitana } from 'next/font/google';

// Specify font weights explicitly
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify available weights
});