package philoarte.jaemin.api.review.service;

import philoarte.jaemin.api.review.domain.Reply;
import philoarte.jaemin.api.review.domain.dto.ReplyDto;
import philoarte.jaemin.api.review.domain.Review;

import java.util.List;
import java.util.UUID;

public interface ReplyService {

    Long save(ReplyDto replyDto);

    void remove(Long rno);

    void modify(ReplyDto replyDto);

    List<ReplyDto> getList(Long reviewId);

    default Reply dtoToEntity(ReplyDto replyDto) {
        Review review = Review.builder().reviewId(replyDto.getReviewId()).build();

        Reply reply = Reply.builder()
                .rno(replyDto.getRno())
                .text(replyDto.getText())
                .replyer(replyDto.getReplyer())
                .uuid(replyDto.getUuid())
                .imageName(replyDto.getImgName())
                .path(replyDto.getPath())
                .review(review)
                .build();

        return reply;
    }

    default ReplyDto entityToDto(Reply reply) {
        ReplyDto replyDto = ReplyDto.builder()
                .rno(reply.getRno())
                .text(reply.getText())
                .replyer(reply.getReplyer())
                .regDate(reply.getRegDate())
                .modDate(reply.getModDate())
                .build();

        return replyDto;
    }

}
