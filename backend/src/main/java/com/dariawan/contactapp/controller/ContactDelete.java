package com.dariawan.contactapp.controller;

 

//import com.dariawan.contactapp.domain.Address;

import com.dariawan.contactapp.domain.Contact;

import com.dariawan.contactapp.exception.BadResourceException;

import com.dariawan.contactapp.exception.ResourceAlreadyExistsException;

import com.dariawan.contactapp.exception.ResourceNotFoundException;

import com.dariawan.contactapp.service.ContactService;

import java.net.URI;

import java.net.URISyntaxException;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.MediaType;

import org.springframework.http.ResponseEntity;

import org.springframework.util.StringUtils;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PatchMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

 

@RestController


@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/secured")

public class ContactDelete {

    

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    

    @Autowired

    private ContactService contactService;



    
    @DeleteMapping(path="/delete/{contactId}")

    public ResponseEntity<Contact> deleteContactById(@PathVariable long contactId) {

        try {

            contactService.deleteById(contactId);

            return ResponseEntity.ok().build();

        } catch (ResourceNotFoundException ex) {

            logger.error(ex.getMessage());

            return ResponseEntity.notFound().build();

        }

    }

}
