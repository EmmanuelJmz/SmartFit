package utez.edu.mx.smartfitutez.record;

import jakarta.persistence.*;
import lombok.*;
import utez.edu.mx.smartfitutez.users.Users;

@Entity
@Table (name = "record")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Record {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "weight", nullable = false)
    private String weight;

    @Column (name = "date", nullable = false)
    private String date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private Users users;
}
