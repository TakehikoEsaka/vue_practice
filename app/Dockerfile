FROM python:3.7

                  
ADD requirements.txt .
RUN pip install -r requirements.txt
WORKDIR /home/app/

# （コンテナ内で作業する場合）必要なパッケージをインストール
# RUN apt-get update                  
# RUN apt-get install add zsh vim tmux git tig

# 開発用entrypoint (CMDはdocker runで上書き出来てしまう)
# CMD ["python", "hello.py"]
# CMD ["sh", "docker-entrypoint.sh"] -> 通る
# ENTRYPOINT ["sh", "docker-entrypoint.sh"] 
# ※ 開発版ではここを外すとアウトメインプロセス終了してexitしてしまうけど，開発版はdevのdocker-composeで無限ループはいるようにcommand入れてるので中に入れる

# 本番用entrypoint (gnicorn×nginx)
# EXPOSE 8000
# ENTRYPOINT ["gunicorn", "-w", "1", "hello:app", "-b", "0.0.0.0:8000", "--log-level=debug", "--workers=1", "--timeout=120"]