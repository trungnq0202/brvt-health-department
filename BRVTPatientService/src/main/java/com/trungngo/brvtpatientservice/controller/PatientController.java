package com.trungngo.brvtpatientservice.controller;

import com.trungngo.brvtpatientservice.model.Patient;
import com.trungngo.brvtpatientservice.service.PatientServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

@RestController
@RequestMapping(path = "/patient")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PatientController {
    private final PatientServiceInterface patientService;

    @Autowired
    public PatientController(PatientServiceInterface patientService) {
        this.patientService = patientService;
    }

    @PostMapping(path="/add")
    public ResponseEntity addPatient(@RequestBody Patient patient) {
        Patient patientAdd = patientService.addPatient(patient);
        if(patientAdd == null) {
            return new ResponseEntity<>(
                    "Failed to add patient.",
                    HttpStatus.BAD_REQUEST
            );
        }
        else {
            return new ResponseEntity<>(
                    patientAdd,
                    HttpStatus.OK
            );
        }
    }

    @GetMapping(path="/{id}")
    public ResponseEntity getPatientById(@PathVariable Integer id) {
        Patient patient = patientService.findPatientById(id);
        if(patient == null) return new ResponseEntity<>("Patient not found.", HttpStatus.BAD_REQUEST);
        else return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @PostMapping(path="/{id}/updateStatus")
    public ResponseEntity updateStatusById(@PathVariable Integer id, @RequestBody String status) {
        Patient patient = patientService.findPatientById(id);
        if(patient == null) return new ResponseEntity<>("Patient not found.", HttpStatus.BAD_REQUEST);
        else {
            if(status == null) return new ResponseEntity<>("Status not found.", HttpStatus.BAD_REQUEST);
            else {
                patient = patientService.updateStatusById(id, status);
                return new ResponseEntity<>(patient, HttpStatus.OK);
            }
        }
    }

    @GetMapping(path="/findAll")
    public ResponseEntity findAllPatients() {
        return new ResponseEntity<>(
                patientService.findAllPatient(),
                HttpStatus.OK
        );
    }

    @PutMapping(value = "")
    public ResponseEntity updatePatient(@RequestBody Patient patient) throws InvalidKeySpecException, NoSuchAlgorithmException {
        Patient updatedDoctor = patientService.updatePatient(patient);
        if (updatedDoctor == null) {
            return new ResponseEntity<>(
                    "Failed to update account",
                    HttpStatus.BAD_REQUEST
            );
        } else {
            return new ResponseEntity<>(
                    updatedDoctor,
                    HttpStatus.OK
            );
        }
    }

    @DeleteMapping(value = "/{id}")
    public String deletePatientById(@PathVariable Integer id){
        return patientService.deletePatientById(id);
    }

    @GetMapping(path="/getStatus/{id}")
    public ResponseEntity getStatusById(@PathVariable Integer id) {
        String status = patientService.getStatusById(id);
        if(status == null) return new ResponseEntity<>("Patient not found.", HttpStatus.BAD_REQUEST);
        else return new ResponseEntity<>(status, HttpStatus.OK);
    }

    @PostMapping(path="/updateAssignedDoctor/{patientId}/{doctorId}")
    public ResponseEntity updateAssignedDoctor(@PathVariable Integer patientId, @PathVariable Integer doctorId) {
        Patient patient = patientService.findPatientById(patientId);
        if(patient == null) return new ResponseEntity<>("Patient not found.", HttpStatus.BAD_REQUEST);
        else {
            patient = patientService.updateAssignedDoctor(patientId, doctorId);
            return new ResponseEntity<>(patient, HttpStatus.OK);
        }
    }

}
