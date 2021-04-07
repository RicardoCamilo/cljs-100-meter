(ns hello-seymore.core
  (:require [hello-seymore.components :refer [like-seymore counter process lane running-track race]]
            [cljs.core.async :as async :refer [<! >! timeout chan dropping-buffer]]
            [clojure.string :as s]
            [goog.string :as gstring]
            [goog.string.format])
  (:require-macros [cljs.core.async.macros :as async-macros :refer [go]]))

;(def c (chan))

;(go (while true (<! (timeout 500)) (>! c 1)))
;(go (while true (<! (timeout 1500)) (>! c 2)))
;(go (while true (<! (timeout 2000)) (>! c 3)))

;(defn peekn
;  [v n]
;  (if (> (count v) n)
;    (subvec v (- (count v) n))
;    v))
;
;(defn render! [queue]
;  (.render js/ReactDOM
;           ;(process queue)
;           (lane '("-" "-" "-"))
;           (.getElementById js/document "app")))
;
;(render! [])
;
;(go
;  (loop [q []]
;    (render! q)
;    (recur (-> (conj q (<! c))
;               (peekn 10)))))

(defrecord Runner [name speed lane])

(defn build-lane
  [name]
  (conj (repeat 99 "-") name))

(defn runner
  "Creates a new runner"
  [{:keys [name speed]}]
  (map->Runner {:name (gstring/format "%15s" name)
                :speed speed
                :lane (build-lane name)}))

(defn not-runner? [r]
  (= r "-"))

(defn find-runner [lane]
  (split-with not-runner? lane))

(defn take-step [[a b]]
  (concat (conj a "-") (butlast b)))

(defn print-running
  [lane]
  (s/join "" lane))

(defn update-runner-lane
  [lane runner]
  (assoc runner :lane lane))

(def race-state (atom {:winners []
                       :race-is-over? false
                       :runners (map runner [{:name "Usain Bolt", :speed 100}
                                             {:name "Jesse Owens", :speed 108}
                                             {:name "Justin Gatlin", :speed 116}
                                             {:name "Tyson Gay", :speed 112}
                                             {:name "Tommie Smith", :speed 122}
                                             {:name "Carl Lewis", :speed 101}
                                             {:name "Florence", :speed 102}
                                             {:name "Maurice Greene", :speed 117}
                                             {:name "Donovan Bailey", :speed 125}
                                             {:name "Michael Johnson", :speed 119}])}))

(def finish-line (chan 10))

(def runners (atom (map runner [{:name "Usain Bolt", :speed 100}
                                {:name "Jesse Owens", :speed 108}
                                {:name "Justin Gatlin", :speed 116}
                                {:name "Tyson Gay", :speed 112}
                                {:name "Tommie Smith", :speed 122}
                                {:name "Carl Lewis", :speed 101}
                                {:name "Florence", :speed 102}
                                {:name "Maurice Greene", :speed 117}
                                {:name "Donovan Bailey", :speed 125}
                                {:name "Michael Johnson", :speed 119}])))

(def winners (atom []))
(def race-is-over? (atom false))

(defn render! []
  (.render js/ReactDOM
           (race runners winners race-is-over?)
           (.getElementById js/document "app")))

(add-watch runners :on-change (fn [_ _ _ _] (render!)))

(defn update-running-tracking
  [runners-l runner]
  (reduce (fn [acc val]
            (if (not= (:name runner) (:name val))
              (conj acc val)
              (conj acc runner)))
          []
          runners-l))

(defn update-running-trackingV2
  [running-track runner]
  (reduce (fn [acc val]



            (if (not= (:name runner) (:name val))
              (conj acc val)
              (conj acc runner)))
          []
          running-track))



(render!)

(defn run [lane runner]
  (-> lane
      (find-runner)
      (take-step)
      (update-runner-lane runner)))



(doseq [r @runners]
  (go
    (loop [{:keys [speed lane name]} r]
      (let [l (last lane)]
        (<! (timeout speed))
        (if (not= l "-")
          (>! finish-line name)
          (let [ran (run lane r)]
            (swap! runners update-running-tracking ran)
            (recur ran)))))))

(go
  (while (< (count @winners) 10)
    (swap! winners conj (<! finish-line)))
  (swap! race-is-over? not)
  (swap! winners subvec 0 3)
  (render!))


(.log js/console (gstring/format "%15s" "Usain Bolt"))

;(.log js/console (str (running (runner {:name "Usain" :speed 1500}))))





