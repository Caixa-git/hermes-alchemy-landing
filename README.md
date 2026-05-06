# HERMES ALCHEMY Landing Page

> 말을 결과물로 바꾸는 private AI operation system

## 한 줄 소개

HERMES ALCHEMY의 개념과 프레임워크 구조를 30초 안에 이해할 수 있도록 시각적으로 정리한 랜딩 페이지입니다.

## 목적

ALCHEMY v0.1은 이미 문서 구조가 완성된 Private Launch Ready 상태입니다. 이 랜딩 페이지는 문서 내용을 그대로 나열하지 않고, 시각적 흐름과 포트폴리오 설득력을 우선해 ALCHEMY를 소개합니다.

## 주요 섹션

| 섹션 | 설명 |
|------|------|
| Hero | ALCHEMY 핵심 메시지와 CTA |
| What is ALCHEMY | 개념 3문장 설명 |
| Core Flow | 자연어 → 산출물 7단계 시각화 |
| Framework Layer | CRAFT/POWER CRAFT/SUPER POWER CRAFT/STORE POWER CRAFT/ALCHEMY 계층 |
| Skill Layer | Maestro, Naruhodo, Webhound 스킬 카드 |
| Case Study | Maestro Portfolio 실제 검증 사례 |
| Decision Philosophy | 승인/보류/거절 중심 운영 |
| User Approval Boundary | 10대 승인 필요 상황 |
| Project Re-Intake | 기존 프로젝트 재투입 7단계 |
| Private Launch Status | v0.1 완료 현황 (10/11) |
| Next Action | 사용자 친화적 다음 액션 |

## 실행 방법

로컬 서버 없이 파일로 직접 열어도 정상 작동합니다.

```bash
# 방법 1: 브라우저에서 직접 열기
open index.html

# 방법 2: 로컬 서버
python3 -m http.server 8000
# → http://localhost:8000
```

## ALCHEMY 핵심 개념

- **운영 철학**: "덜 묻고, 더 판단하고, 꼭 필요한 것만 요청한다."
- **사용자 역할**: 승인 / 보류 / 거절만 선택
- **에이전트 역할**: 권장안 생성, 실행, 검증, 보고
- **출력 형식**: Markdown 보고서 중심

## Framework Layer

| 레벨 | 프레임워크 | 설명 | 상태 |
|------|-----------|------|------|
| L1 | **CRAFT** | 작은 작업을 빠르게 끝내는 최소 실행 프레임워크 | ✅ Operational |
| L2 | **POWER CRAFT** | GitHub/Live Demo/QA/문서까지 갖춘 포트폴리오 개발 | ✅ Operational |
| L3 | **SUPER POWER CRAFT** | 최대 3 Cycle 안에 Sales Test Ready 판단 | ✅ Operational |
| L4 | **STORE POWER CRAFT** | App Store / Google Play 제출 준비 점검 | 🔧 Ready |
| OS | **ALCHEMY** | 위 프레임워크와 스킬들을 운용하는 private system | ✅ v0.1 Private Launch Ready |

## Skill Layer

| 스킬 | 역할 | 상태 |
|------|------|------|
| **Maestro** | 모바일 E2E 테스트 자동화 (iOS SwiftUI) | ✅ Verified — 19 Step COMPLETED |
| **Naruhodo** | Legal & Rights Review (라이선스/저작권/개인정보) | 🔧 Planned — Gate 연동 완료 |
| **Webhound** | Web Research (트렌드/리서치/분석) | 🔧 Planned — v0.2 |

## Maestro Case Study

SwiftUI 기반 모바일 예약 앱에 Maestro 19단계 E2E 테스트를 설계하고 실제 iOS 기기에서 검증 완료.

**발견된 이슈:** SwiftUI SecureField + Maestro inputText 비호환
**해결 방안:** `quick_login_button` 우회 패턴 도입

## 제한 사항

- ALCHEMY는 공개 SaaS가 아닌 private AI operation system입니다
- 이 페이지는 포트폴리오/내부 소개용입니다
- 모든 스킬 정보는 ALCHEMY SKILL_REGISTRY.md 기준입니다

## 산출물

| 파일 | 설명 |
|------|------|
| [index.html](index.html) | 랜딩 페이지 HTML |
| [style.css](style.css) | 다크 연금술 테마 스타일 |
| [app.js](app.js) | 페이지 인터랙션 |
| [Outputs Index](outputs/INDEX.md) | 전체 산출물 인덱스 |

## 다음 액션

- **권장 결정**: ✅ Approve
- **이유**: ALCHEMY v0.1 개념을 시각적으로 정리하는 목적 달성
- **지금 사용자에게 필요한 행동**: 없음. 랜딩 페이지는 포트폴리오용으로 사용 가능
- **나중에 필요한 조건**: ALCHEMY 문서 변경 시 페이지 문구 함께 갱신
