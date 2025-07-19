export const registerUser = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mocked API Response:', data);
      resolve({ status: 200, data: { message: 'Success' } });
    }, 1000); // simulate 1 second delay
  });
};
