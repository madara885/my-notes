fn main() {
    eprintln!("Hello from Rust inside Docker! 🦀");
    // небольшая задержка для гарантии вывода
    std::thread::sleep(std::time::Duration::from_millis(100));
}
