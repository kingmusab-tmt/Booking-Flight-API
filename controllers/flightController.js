const { Flights } = require("../models/Flight");
const {v4: uuid} = require("uuid");

exports.getFlights = async (req, res) => {
    try{
        const flights = Flights;
        res.status(200).json({
            message: "All Flights",
            flights: flights
        });
    } catch(err){
        res.status(500).json({message: err.message});
    }
}
exports.getFlight = async (req, res) =>{
    try{
        let id = req.params.id;
        const flight = Flights.find((flight)=> flight.id === id);
        res.status(200).json({
            message: "Flight Found",
            flight,
        });
    } catch(err){
        res.status(500).json({message: err.message});
    }
}
exports.createFlight = async (req, res)=>{
    try{
        const { title, time, price, date } = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time: new Date().toTimeString(),
            price,
            date: new Date()
        };

        Flights.push(newFlight);
        
        res.status(201).json({
            message: "Flight Created",
            newFlight,
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.updateFlight = async (req, res) =>{
    try{
        let id = req.params.id;
        const flight = Flights.find((flight)=> flight.id === id);
        const { title, time, price, date } = await req.body;
        flight.title = title;
        flight.time = new Date().toTimeString();
        flight.price = price;
        flight.date = new Date();
        res.status(200).json({
            message: "Flight updated",
            flight,
        });
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.deleteFlight = async (req, res) =>{
    try{
        let id = req.params.id;
        const flight = Flights.find((flight)=> flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: "Flight Deleted", 
            flight,
        });

    }catch(err){
        res.status(500).json({message: err.message});
    }
};


