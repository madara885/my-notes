#!/bin/bash

# Название ветки (по умолчанию main)
BRANCH="main"

echo "=== Старт синхронизации репозитория ==="

# 1. Проверяем локальные изменения
if [ -z "$(git status --porcelain)" ]; then
    echo "Локальных изменений нет. Только забираем обновления из облака..."
    git pull origin $BRANCH
else
    echo "Обнаружены локальные изменения. Подготавливаем к отправке..."
    
    # 2. Добавляем все новые и измененные файлы
    git add .
    
    # 3. Создаем коммит с текущей датой и временем
    COMMIT_MSG="Авто-коммит: $(date '+%Y-%m-%d %H:%M:%S')"
    git commit -m "$COMMIT_MSG"
    
    echo "Забираем изменения из GitHub и объединяем (авто-мерж)..."
    git pull origin $BRANCH --no-edit
    
    echo "Отправляем всё на GitHub..."
    git push origin $BRANCH
fi

echo "=== Синхронизация успешно завершена! ==="
