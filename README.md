# action-ssh
> Github actions for coscli.

## usgae
```yml
- name: Use coscli
  uses: afeiship/action-ssh@1.0.0
```

## config
```shell
gh secret set ID_RSA -b "$(cat ~/.ssh/id_rsa)"
```

## full
```yml
name: ssh test workflow
on: [push]
jobs:
  hello:
    name: test ssh
    runs-on: ubuntu-latest
    env:
      ID_RSA: ${{ secrets.ID_RSA }}

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Use SSH
        uses: afeiship/action-ssh@master

      - name: Debug
        run: |
          ssh $SSH_OPTIONS ubuntu@111.229.34.137 <<'ENDSSH'
          cd ~/github
          ls -alh
          ENDSSH
```