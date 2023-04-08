



export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
      } else {
        // Handle any other HTTP method
      }
    
    res.status(200).json({
      data: {
        name: "User",
      },
    });
  }
  