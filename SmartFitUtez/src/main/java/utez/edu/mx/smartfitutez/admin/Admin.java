package utez.edu.mx.smartfitutez.admin;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table (name = "admin")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Admin {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "username",unique = true, nullable = false, length = 150)
    private String username;

    @Column (name = "accessCode", nullable = false)
    private String accessCode;

}
