package philoarte.jaemin.api.upload.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@ToString(exclude = "performance")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Pictures {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pnum;

    private String uuid;

    private String fname;

    private boolean first;

    @ManyToOne
    private Performance performance;

    public void confirmPerformance(Performance performance){
        this.performance = performance;
    }
}