import nodemailer from "nodemailer"
import { appointData } from "../models/appointForm.js"
import { contactData } from "../models/contactForm.js"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "bar00nshrestha098@gmail.com",
        pass: "fcxakxypjzxduzmh"
    }
})

export const submit = async (req, res) => {
    const { guardianEmail, guardianName, childName, childAge, message } = req.body

    try {
        const newFormSubmission = new appointData({
            guardianEmail,
            guardianName,
            childName,
            childAge,
            message
        });

        await newFormSubmission.save();

        const mailOptions = {
            from: 'bar00nshrestha098@gmail.com',
            to: 'baroonshrestha4@gmail.com',
            subject: 'New Form Submission',
            html: `
            <h2>New Form Submission</h2>
            <p><strong>Guardian Email:</strong> ${guardianEmail}</p>
            <p><strong>Guardian Name:</strong> ${guardianName}</p>
            <p><strong>Child Name:</strong> ${childName}</p>
            <p><strong>Child Age:</strong> ${childAge}</p>
            <p><strong>Message:</strong><br>${message}</p>
          `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Failed to submit form' });
    }
}




const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "bar00nshrestha098@gmail.com",
        pass: "fcxakxypjzxduzmh"
    }
})

export const submitContact = async (req, res) => {
    const { name, email, subject, message } = req.body

    try {
        const newFormSubmission = new contactData({
            name,
            email,
            subject,
            message
        });

        await newFormSubmission.save();

        const mailOptions = {
            from: 'bar00nshrestha098@gmail.com',
            to: 'baroonshrestha4@gmail.com',
            subject: 'New contact Info recevied',
            html: `
            <h2>New Form Submission</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>subject:</strong> ${subject}</p>
            <p><strong>Message:</strong><br>${message}</p>
          `
        };

        sender.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Failed to submit form' });
    }
}