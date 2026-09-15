# ---- Этап 1: Сборка зависимостей и приложения ----
FROM dockerhub.timeweb.cloud/library/rust:1-slim AS builder
WORKDIR /app

# 1. Сначала копируем только манифест и собираем пустую заглушку для кэша зависимостей
COPY Cargo.toml .
RUN mkdir src && echo "fn main() {}" > src/main.rs
RUN cargo build --release

# 2. ТЕПЕРЬ удаляем бинарник заглушки, копируем настоящий код и компилируем его!
RUN rm -f target/release/deps/rust_app* target/release/rust-app*
COPY src ./src
RUN cargo build --release

# ---- Этап 2: Минимальный образ для запуска ----
FROM dockerhub.timeweb.cloud/library/debian:stable-slim
RUN useradd --create-home appuser
WORKDIR /home/appuser
COPY --from=builder /app/target/release/rust-app ./rust-app
USER appuser
EXPOSE 8081
CMD ["./rust-app"]
