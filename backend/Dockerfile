# 1단계: Gradle로 JAR 빌드
FROM gradle:8.7-jdk21 AS builder

WORKDIR /app

# Gradle 설정 및 wrapper 복사 (캐시 효율 위해 먼저 복사)
COPY build.gradle settings.gradle gradlew gradlew.bat ./
COPY gradle ./gradle

# 소스 코드 복사
COPY src ./src

# JAR 빌드
RUN ./gradlew clean bootJar --no-daemon

# 2단계: 실행 전용 이미지 (더 가벼운 JRE)
FROM eclipse-temurin:21-jre

WORKDIR /app

# 빌드된 JAR만 가져오기 (이름은 *로 처리)
COPY --from=builder /app/build/libs/*.jar app.jar

EXPOSE 8080

# 기본 프로필이 local(H2)라서 따로 안 건드려도 됨
ENTRYPOINT ["java", "-jar", "app.jar"]
