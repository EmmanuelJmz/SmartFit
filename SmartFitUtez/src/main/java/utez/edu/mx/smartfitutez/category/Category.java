package utez.edu.mx.smartfitutez.category;

import jakarta.persistence.*;
import lombok.*;
import utez.edu.mx.smartfitutez.exercises.Exercises;

import java.util.Set;

@Entity
@Table (name = "categories")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Category {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "name",unique = true, nullable = false, length = 150)
    private String name;

}
