package utez.edu.mx.smartfitutez.routines;

import jakarta.persistence.*;
import lombok.*;
import utez.edu.mx.smartfitutez.exercises.Exercises;
import utez.edu.mx.smartfitutez.instructors.Instructors;
import utez.edu.mx.smartfitutez.users.Users;

@Entity
@Table (name = "routines")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Routines {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "schedule", nullable = false)
    private String schedule;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exercises_id", nullable = false)
    private Exercises exercises;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "instructors_id", nullable = false)
    private Instructors instructors;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Users users;

}
