import express from "express";
const router = express.Router();

router.post("/prime", (req, res) => {
  try {
    const { number } = req.body;
    var Prime = [];

    for (var i = 0; i < number; i++) {
      if (i % 2 === 1) {
        console.log(i);
        Prime.push(i);
      }
    }

    res.status(200).json({
      status: "SUCCESS",
      message: "Prime Number has been fetched",
      data: Prime,
    });

  } catch (error) {
    res.status(404).json({
      status: "FAILED",
      message: "Failed to fetch prime number",
    });
  }
});

router.post("/ganjil", (req, res) => {
  try {
    const { number } = req.body;
    var Odd = [];

    for (var i = 0; i < number; i++) {
      if (i % 2 !== 0) {
        console.log(i);
        Odd.push(i);
      }
    }

    res.status(200).json({
        status: "SUCCESS",
        message: "Odd Number has been fetched",
        data: Odd,
      });

  } catch (error) {
    res.status(404).json({
      status: "FAILED",
      message: "Failed to fetch prime number",
    });
  }
});

router.post("/triangle", (req, res) => {
    try {
      const { number } = req.body;
      var string = number.toString(number); 
      var Result = [];
  console.log(string)
      for (var i = 0; i < string.length; i++) {
       Result.push(i)
      }
  
      res.status(200).json({
          status: "SUCCESS",
          message: "Odd Number has been fetched",
          data: Result,
        });
  
    } catch (error) {
      res.status(404).json({
        status: "FAILED",
        message: "Failed to fetch prime number",
      });
    }
  });

export default router;
