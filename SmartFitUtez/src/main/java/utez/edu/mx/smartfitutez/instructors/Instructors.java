package utez.edu.mx.smartfitutez.instructors;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table (name = "instructors")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Instructors {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "name",unique = true, nullable = false, length = 150)
    private String name;

    @Column (name = "last_Name", nullable = false)
    private String lastName;

    @Column (name = "birthdate", nullable = false)
    private String birthdate;

    @Column (name = "email", nullable = false)
    private String email;

    @Column (name = "password", nullable = false)
    private String password;

}
