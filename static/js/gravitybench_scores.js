const gravitybench_budget_obs_100_scores = [
    {
        "Model": "o4-mini-high-2025-04-16",
        "Performance": "49.4% ± 2.6%",
        "Total Cost ($)": "81.23 ± 1.68",
        "Total Time (min)": "2854.5 ± 151.7",
        "Mean Observations Used": "33.2 ± 1.5"
    },
    {
        "Model": "claude-3-5-sonnet-20241022",
        "Performance": "21.5% ± 2.5%",
        "Total Cost ($)": "15.88 ± 0.64",
        "Total Time (min)": "128.3 ± 2.5",
        "Mean Observations Used": "24.3 ± 0.5"
    },
    {
        "Model": "claude-3-5-haiku-20241022",
        "Performance": "16.1% ± 2.3%",
        "Total Cost ($)": "3.33 ± 0.10",
        "Total Time (min)": "94.4 ± 0.7",
        "Mean Observations Used": "12.6 ± 0.4"
    },
    {
        "Model": "gpt-4o-2024-11-20",
        "Performance": "15.5% ± 2.1%",
        "Total Cost ($)": "9.60 ± 0.12",
        "Total Time (min)": "63.5 ± 1.6",
        "Mean Observations Used": "12.2 ± 0.7"
    },
    {
        "Model": "gpt-4o-mini-2024-07-18",
        "Performance": "8.3% ± 1.5%",
        "Total Cost ($)": "0.60 ± 0.03",
        "Total Time (min)": "83.3 ± 4.2",
        "Mean Observations Used": "13.4 ± 1.0"
    }
];

const gravitybench_full_obs_scores = [
    {
        "Model": "o4-mini-high-2025-04-16",
        "Performance": "73.9% ± 2.4%",
        "Total Cost ($)": "15.59 ± 0.24",
        "Total Time (min)": "522.6 ± 14.2",
        "Mean Observations Used": "-"
    },
    {
        "Model": "claude-3-5-sonnet-20241022",
        "Performance": "39.5% ± 3.2%",
        "Total Cost ($)": "5.58 ± 0.06",
        "Total Time (min)": "69.9 ± 0.3",
        "Mean Observations Used": "-"
    },
    {
        "Model": "gpt-4o-2024-11-20",
        "Performance": "36.1% ± 3.2%",
        "Total Cost ($)": "3.41 ± 0.17",
        "Total Time (min)": "45.6 ± 3.2",
        "Mean Observations Used": "-"
    },
    {
        "Model": "claude-3-5-haiku-20241022",
        "Performance": "34.1% ± 3.1%",
        "Total Cost ($)": "1.46 ± 0.03",
        "Total Time (min)": "63.3 ± 1.3",
        "Mean Observations Used": "-"
    },
    {
        "Model": "gpt-4o-mini-2024-07-18",
        "Performance": "26.7% ± 2.8%",
        "Total Cost ($)": "0.16 ± 0.00",
        "Total Time (min)": "40.4 ± 0.7",
        "Mean Observations Used": "-"
    }
];

// †Preliminary results shown for a single full-obs run of o1.
// 17/206 problems were refused by the o1 API due to content policy flags, which we remove from this analysis.
// All other models completed full 206-task evaluations. 