import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public commonPart = {
    question1: "What is it?",
    answer1:`
    FinBots helps to earn money using algo trading.
    Algo trading is a type of trading when operations are made with special software or trading bots.
    Bot makes operations using programming strategies or getting signals.`,

    question2: "How does it work?",
    answer2:`
    Trading bot is a program that makes operations automatically.
    Other words, a bot does exactly what you do manually.
    For that process you put in some parameters, like share ticker, number of lots and strategy.
    By strategy I mean the source of signals.
    The only left for you is monitoring your bot deals in the dashboard.`,

    question3: "Does it replace trading broker service?",
    answer3:`No, it doesn’t. Trading process and making deals are controlled by your trading broker as before.`,

    question4: "What brokers do you have for integrations?",
    answer4:`For the MVP stage it is only Tinkoff.`,

    question5: "How much is your fee?",
    answer5:`There is no fee for the MVP stage.`,

    question6: "Who is in your team?",
    answer6:`
    Eugene Trigubov, trigubov.eugene@gmail.com
    Bachelor in Applied Mathematics and Computer Science.
    Studied math applied to finance.
    Develop software for more than 5 years.
    Study algo trading for more than 4 years.
    Last employer is Ozon Fintech.

    Tatiana Ilina, ilyitatjana@yandex.ru
    Bachelor in Applied Mathematics and Computer Science.
    Studied math applied to finance.
    Develop web applications for more than 5 years.
    Developed trading bots using .NET Core.`,

    question7: "I don’t want to fill in any of my personal information, but I’m interested in how it works. What can I do?",
    answer7:`
    In that case you can try how it works with test data.
    On the tab Login you can click Login Demo Mode.
    Or you can create token for sandbox.`,
  }

  public brokerPart = {
    question1: "Why do you need a broker token?",
    answer1:`
    Broker token is a way to prove your identity while making operations.
    In other words, a token is your signature that confirms making deals.
    We need tokens so that bots could make deals automatically without your direct participant.`,

    question2: "Can I use your service without a broker token?",
    answer2:`No, you can’t. Without broker token there is now possibility to make deals automatically`,

    question3: "Can you withdraw money from my broker account with a token?",
    answer3:`No, we can’t. Broker token allows you to do something inside a broker account and stock exchange. `,

    question4: "How to create a broker token for Tinkoff?",
    answer4:`
    To create a new token you should authorize using a web client.
    Follow Инвестиции -> Настройки -> scroll down to Токен для OpenApi.
    You can choose a token for sandbox or for production environment.`,
  }
}
