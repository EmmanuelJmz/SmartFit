package utez.edu.mx.smartfitutez.exercises;

import jakarta.persistence.*;
import lombok.*;
import utez.edu.mx.smartfitutez.admin.Admin;
import utez.edu.mx.smartfitutez.category.Category;

import java.util.Set;

@Entity
@Table (name = "exercises")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Exercises {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "name",unique = true, nullable = false, length = 150)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

}
