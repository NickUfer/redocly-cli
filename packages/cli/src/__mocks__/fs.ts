export const existsSync = jest.fn();
export const readFileSync = jest.fn(() => '');
export const statSync = jest.fn(() => ({ size: 0 }));
export const createReadStream = jest.fn();
