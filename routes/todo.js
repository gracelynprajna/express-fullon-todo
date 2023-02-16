import express from "express";


//instance of router for this file
const router = express.Router(); 

//this route is essentially /todo
router.get("/", (_request, response) => {
    response.status(200).json({
        success: true,
    });
});

export default router;