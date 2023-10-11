package com.student.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Table
@Data

public class Subject {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int id;
	    private String subject;
	    public Subject(){
	    	super();
	        
	    }
	    public Subject(int id, String subject) {
	        this.id = id;
	        this.subject = subject;
	    }
	    public int getId() {
	        return id;
	    }
	    public void setId(int id) {
	        this.id = id;
	    }
	    public String getSubject() {
	        return subject;
	    }
	    public void setSubject(String subject) {
	        this.subject = subject;
	    }
}

