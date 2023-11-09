const pool = require('../config/db');

// Render the appointment booking page
module.exports.appointment = async (req, res) => {
    
}

// Make an appointment
module.exports.make_appointment = async (req, res) => {
    try {
        
        const id = 0; // I will generate unique id using any predefined functions

        // Insertion query into the appoints table
        // start_time, end_time, date, doctor_email, etc
        // keep the is_pending bit as 1
        await pool.query(``);

        req.flash('success', 'Appointment booked successfully');
        return res.redirect('/');
        
    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({error: 'Server Error!'});
    }
}

module.exports.track_appointment = async (req, res) => {
    try {
        
        // given the patient's email in req.user.email, find out the appointments booked by the patients
        // All the appointments, i.e., pending bit 0 as well as 1
        // write two diiferent different queries for upcoming and past appointments
        let upcoming_appointments = await pool.query(``);
        let past_appointments = await pool.query(``);

        return res.render('patient-appointments', {
            title: 'Appointments',
            upcoming_appointments: upcoming_appointments,
            past_appointments: past_appointments
        });
        
    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({error: 'Server Error!'});
    }
}