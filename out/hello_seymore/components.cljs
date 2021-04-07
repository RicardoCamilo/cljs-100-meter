(ns hello-seymore.components
  (:require [sablono.core :as sab]))


(defrecord Runner [name speed lane])

(defn like-seymore [data]
  (sab/html [:div
             [:h1 "Seymore's popularity: " (:likes @data)]
             [:div [:a {:href "#"
                        :onClick #(swap! data update-in [:likes] inc)}
                    "Thumbs up"]]
             [:div
              [:p "this is a test!"]]]))

(defn counter [r-number]
  (sab/html [:div "Counter: " r-number]))

(defn process [queue]
  (sab/html
    [:ul {:class "processes"}
     (for [p (reverse queue)]
       [:li {:class (str "proc-" p)} "Process " p])]))

(defn lane
  [lane]
  (sab/html [:div lane]))

(defn running-track
  [runners]
  (sab/html [:div (for [runner @runners]
                    [:div (:lane runner)])]))

(defn podium
  [winners]
  (sab/html [:ul (for [winner @winners]
                   [:li winner])]))

(defn race
  [runners winners over?]
  (sab/html [:div (running-track runners)
             (if @over?
               (podium winners)
               nil)]))