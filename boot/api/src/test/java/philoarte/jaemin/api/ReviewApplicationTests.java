package philoarte.jaemin.api;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.repository.ReviewRepository;

import java.util.List;

@SpringBootTest
@Log4j2
public class ReviewApplicationTests {

    @Autowired
    private ReviewRepository reviewRepository;

    @Test
    public void test() {
        log.info("test");
    }

    @Test
    public void reviewSave() {

        Art art = new Art();
        art.setArtId(1L);
        Artist artist = new Artist();
        artist.setArtistId(8L);

        Review review = Review.builder()
                .art(art)
                .artist(artist)
                .comment("Comment").content("Content").build();
        reviewRepository.save(review);
    }

    @Test
    public void reviewList(){
        List<Review> result = reviewRepository.findAll();

        for(Review review : result){
            System.out.println(review + " : " + review.getArt());
        }
    }

    @Test
    public void reviewPage(){
        Pageable pageable = PageRequest.of(1, 5);

        reviewRepository.allDataPaging(pageable).get().forEach(review ->{
            log.info(review);
            System.out.println(review.getContent());
        });
    }

    @Transactional
    @Test
    @Commit
    public void reviewUpdate(){

        reviewRepository.reviewUpdate(8L, "그냥해", "정말?");
    }

    @Test
    public void reviewDelete(){

        reviewRepository.deleteById(8L);
    }
}
