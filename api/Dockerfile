# railsサーバーとしてのコンテナ用

# ベースイメージを選択
FROM ruby:2.7.1-alpine3.11

# bundlerバージョンを指定
ENV BUNDLER_VERSION=2.1.4

# 作業するコンテナ内ディレクトリを指定
WORKDIR /usr/src/app

# rails gemをインストールするためにgemfileをコピー
COPY Gemfile .

# railsを起動するためのpackageをインストール
# gemfileを元にrailsをインストール
RUN apk update && \
    apk add --no-cache \
    linux-headers \
    libxml2-dev \
		curl-dev \
		make \
		gcc \
		libc-dev \
		g++ \
		sqlite-dev \
    tzdata && \
    gem install bundler && \
    bundle install

# このコンテナにはport3000でアクセスする
EXPOSE 3000