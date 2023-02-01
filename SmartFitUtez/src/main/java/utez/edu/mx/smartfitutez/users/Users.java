package utez.edu.mx.smartfitutez.users;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table (name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Users {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "name", nullable = false, length = 150)
    private String name;

    @Column (name = "last_name", nullable = false)
    private String last_name;

    @Column (name = "birthday", nullable = false)
    private String birthday;

    @Column (name = "height", nullable = false)
    private String height;

    @Column (name = "email", nullable = false)
    private String email;

    @Column (name = "password", nullable = false)
    private String password;

}
