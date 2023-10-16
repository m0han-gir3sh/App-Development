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

public class Marks {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int id;
	    private String subject;
        private int score;
	    public Marks(){
	    	super();
	        
	    }
	    public Marks(int id, String subject, int score) {
	        this.id = id;
	        this.subject = subject;
	        this.score = score;
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
        public int getScore() {
            return score;
        }
        public void setScore(int score) {
            this.score = score;
        }
}










// package com.student.Model;



// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;
// import lombok.Data;
// import lombok.NoArgsConstructor;

// @Entity
// @Table(name="marks")
// @Data
// @NoArgsConstructor
// public class Marks {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private Long studentId;
//     private Long subjectId;
//     private int score;

//     // Getters and setters
// }
