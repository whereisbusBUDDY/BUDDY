package com.ssafy.buddy.member.controller.response;

import com.ssafy.buddy.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberResponse {
    private Long id;
    private String name;
    private String studentId;
    private String nickname;
    private String email;
    private int favoriteLine;
    private String role;

    public static MemberResponse from(Member member) {
        return new MemberResponse(
                member.getId(), member.getName(), member.getStudentId(),
                member.getNickname(), member.getEmail(), member.getFavoriteLine(), member.getRole().name()
        );
    }
}
