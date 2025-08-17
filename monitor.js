// We'll monitor our system analytics!!!
//Take a snapshot
//Take a another snapshot after 1 sec

import os from "node:os";

function monitor() {
	const oldCPU = os.cpus();

	setTimeout(() => {
		const newCPU = os.cpus();

		const usage = newCPU.map((cpu, i) => {
			return {
				core: i,
				usage: calculateCPU(oldCPU[i], newCPU[i]) + "%",
			};
		});

		console.clear();
		console.table(usage);

		const usedMemory = (os.totalmem() - os.freemem()) * (1024 * 1024 * 1024);

		console.log(
			`Memory used: ${usedMemory.toFixed(2)} GB / ${
				os.totalmem / (1024 * 1024 * 1024).toFixed(2)
			} GB`
		);
	}, 1000);
}

function calculateCPU(oldCPU, newCPU) {
	const oldTotal = Object.values(oldCPU.times).reduce((a, b) => a + b);
	const newTotal = Object.values(newCPU.times).reduce((a, b) => a + b);

	const idle = newCPU.times.idle - oldCPU.times.idle;

	const total = newTotal - oldTotal;
	const used = total - idle;

	return (100 * used) / total.toFixed(1);
}

setInterval(monitor, 1000);

/*CPU's:
[
  {
    model: '11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz',
    speed: 2611,
    times: {
      user: 11357796,
      nice: 0,
      sys: 17598093,
      idle: 114671812,
      irq: 1500937
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz',
    speed: 2611,
    times: {
      user: 11454781,
      nice: 0,
      sys: 14543750,
      idle: 117629093,
      irq: 588140
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz',
    speed: 2611,
    times: {
      user: 13512125,
      nice: 0,
      sys: 16574390,
      idle: 113541109,
      irq: 554218
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz',
    speed: 2611,
    times: {
      user: 13814125,
      nice: 0,
      sys: 15809140,
      idle: 114004359,
      irq: 493125
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz',
    speed: 2611,
    times: {
      user: 12295031,
      nice: 0,
      sys: 16457750,
      idle: 114874843,
      irq: 586203
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz',
    speed: 2611,
    times: {
      user: 11214812,
      nice: 0,
      sys: 15362453,
      idle: 117050359,
      irq: 489296
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz',
    speed: 2611,
    times: {
      user: 11380593,
      nice: 0,
      sys: 16017281,
      idle: 116229750,
      irq: 494468
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz',
    speed: 2611,
    times: {
      user: 10969140,
      nice: 0,
      sys: 15475421,
      idle: 117183062,
      irq: 414312
    }
  }
]
*/
